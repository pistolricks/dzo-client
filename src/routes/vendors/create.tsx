import {Component, lazy, VoidComponent} from "solid-js";
import FileUploader from "~/components/contents/file-uploader";

const FormLayout = lazy(() => import( "~/components/layouts/form-layout"));
const CreateVendorForm = lazy(() => import( "~/components/vendors/forms/create-vendor-form"));


const Create: Component<VoidComponent> = () => {

    return (
        <FormLayout title="Add Vendor">
            {/*
            <FileUploader/>
            */}
            <CreateVendorForm/>
        </FormLayout>
    );
};

export default Create;