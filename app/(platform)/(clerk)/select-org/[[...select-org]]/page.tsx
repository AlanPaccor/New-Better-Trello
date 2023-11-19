import { OrganizationList } from "@clerk/nextjs";

export default function CreatOrganizationPage() {
    return (
        <OrganizationList 
        hidePersonal
        afterSelectOrganizationUrl="/organization/:id"
        afterCreateOrganizationUrl="/organization/:id"
        />
    );
};