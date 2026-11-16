import WishlistClient from "@/components/Wishlist/WishlistClient";

export const metadata = {
    title: "My Wishlist - Herbalhub",
    description: "View and manage your favorite items saved on Herbalhub.",
};

export default function WishlistPage() {
    return <WishlistClient />;
}
