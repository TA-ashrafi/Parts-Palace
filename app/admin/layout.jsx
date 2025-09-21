import AdminLayout from "@/components/admin/AdminLayout";

export const metadata = {
    title: "Part Palace. - Admin",
    description: "Part Palace. - Admin",
};

export default function RootAdminLayout({ children }) {

    return (
        <>
            <AdminLayout>
                {children}
            </AdminLayout>
        </>
    );
}
