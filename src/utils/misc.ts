const slugify = (text: string) => text.toLowerCase().replace(/\s+/g, "-");

export const handleViewProduct = (product: any) => {
    window.location.href = `/product/${slugify(product.name ?? product)}`;
};