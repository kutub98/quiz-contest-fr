"use client";

import { useEffect, useState } from "react";
import { getBanner, deleteBanner } from "@/lib/api/banner";
import type { Banner } from "@/types/Banner";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Trash2 } from "lucide-react";
import UpdateBannerDialog from "./_components/update";
import { toast } from "sonner";

export default function BannerList() {
  const [banners, setBanners] = useState<Banner[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await getBanner();
      setBanners(res.data);
    } catch (error) {
      console.error("Failed to fetch banners", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []); // ✅ FIXED: don't re-fetch on `banners` change to avoid infinite loop

  const handleDelete = async (id: string) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this banner?"
    );
    if (!confirmDelete) return;

    try {
      await deleteBanner(id);
      toast.success("Banner deleted successfully.");
      setBanners((prev) => prev.filter((b) => b._id !== id));
    } catch (error) {
      console.error("Failed to delete banner", error);
      toast.error("Failed to delete banner.");
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Banners</h2>
        <Button
          onClick={() => router.push("/dashboard/appearance/banner/create")}
          disabled={banners.length >= 1}
        >
          Create Banner
        </Button>
      </div>

      {loading ? (
        <p className="text-gray-600">Loading banners...</p>
      ) : banners.length === 0 ? (
        <div className="text-center p-8 border rounded-md bg-gray-50">
          <p className="text-gray-500 mb-4">No banners found.</p>
          <Button
            onClick={() => router.push("/dashboard/appearance/banner/create")}
          >
            Create a Banner
          </Button>
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {banners.map((banner) => (
            <div
              key={banner._id}
              className="rounded-xl overflow-hidden border shadow-sm hover:shadow-md transition-all bg-white"
            >
              <img
                src={banner.image}
                alt={banner.title}
                className="h-48 w-full object-cover"
              />
              <div className="p-4 space-y-2">
                <h3 className="text-lg font-semibold">{banner.title}</h3>
                <p className="text-sm text-gray-600">{banner.description}</p>
                {banner.buttonText && (
                  <button className="text-blue-600 underline text-sm">
                    {banner.buttonText}
                  </button>
                )}
                <p className="text-xs text-gray-400">Status: {banner.status}</p>

                <div className="flex justify-end gap-2 mt-2">
                  <UpdateBannerDialog banner={banner} onChange={fetchData} />
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => handleDelete(banner._id)}
                  >
                    <Trash2 className="h-4 w-4 mr-1" />
                    Delete
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
