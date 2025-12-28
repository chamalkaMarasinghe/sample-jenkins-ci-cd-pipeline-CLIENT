import React, { useEffect, useState } from "react";
import { CONFIGURATIONS } from "../config/envConfig";
import { useThunk } from "../hooks/useThunk";
import { getSignature, signUploadUrl } from "../store/thunks/fileThunk";
import ImageUpload from "../components/Reusable/ImageUpload";

const referencesFormats = {
    JPEG_JPG: { mime: "image/jpeg", extensions: [".jpeg", ".jpg"] },
    PNG: { mime: "image/png", extensions: [".png"] },
    PDF: { mime: "application/pdf", extensions: [".pdf"] },
    DOC: { mime: "application/msword", extensions: [".doc"] },
    DOCX: {
        mime: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        extensions: [".docx"],
    },
    XLSX: {
        mime: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        extensions: [".xlsx"],
    },
    PPTX: {
        mime: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
        extensions: [".pptx"],
    },
    CSV: { mime: "text/csv", extensions: [".csv"] },
    TXT: { mime: "text/plain", extensions: [".txt"] },
    ZIP: { mime: "application/zip", extensions: [".zip"] },
    RAR: { mime: "application/vnd.rar", extensions: [".rar"] },
};

const Orders = () => {
    const [uploadFiles, setUploadFiles] = useState([]);

    const [doGetSignature, isGetSignature, errorGetSignature] =
        useThunk(getSignature);
    // const [
    //     doUploadRefrencesToFirebase,
    //     isUploadRefrencesToFirebaseLoading,
    //     uploadRefrencesToFirebaseError,
    // ] = useFirebaseFileUpload();
    const [
        doUploadRefrencesToFirebase,
        isUploadRefrencesToFirebaseLoading,
        uploadRefrencesToFirebaseError,
    ] = [null, null, null];

    const onFileUpload = (files) => {
        setUploadFiles([...files]);
    };

    useEffect(() => {
        getSignatureMethod().then((res) => {console.log(res);});
    }, []);

    const getSignatureMethod = async () => {
        const res = await doGetSignature();

        // res?.response?.data = {
        //     timestamp: "1766951229",
        //     "signature": '14527f9d0496a64b240c0c8925c556f60249c65a',
        //     cloudName: 'drtlgof0d',
        //     apiKey: '596329271326842'
        // }
        if (res?.success) {
            return res?.response?.data;            
        } else {
            return null
        }
    };

    const submit = async () => {

        console.log("submitted");

        // let documents = [];

        // NOTE: Upload files to cloudinary
        if (uploadFiles.length > 0) {
            console.log("uploaded files");
            console.log(uploadFiles);

            // NOTE: Step 2: Upload directly to Cloudinary

            const signature = await getSignatureMethod();// NOTE: obtain signature from backend server with cloudinary secret

            if(!signature?.signature || !signature?.cloudName || !signature?.apiKey){
                return
            }

            const formData = new FormData();

            formData.append("file", uploadFiles[0]);
            formData.append("api_key", signature?.apiKey);
            formData.append("timestamp", signature?.timestamp);
            formData.append("signature", signature?.signature);
            formData.append("folder", "samples/assets");

            const uploadRes = await fetch(
                `https://api.cloudinary.com/v1_1/${signature?.cloudName}/auto/upload`,
                {
                    method: "POST",
                    body: formData,
                }
            );

            console.log(uploadRes.json());

            //NOTE: successfull upload  cloudinary response
            // {
            //     "asset_id": "cc7648592115065bdeef4764b477c710",
            //     "public_id": "samples/assets/gh5lovi0oxw7e4k3xzep",
            //     "version": 1766952770,
            //     "version_id": "aaa12de111d6277e5b8bc283448464e6",
            //     "signature": "48d5ef07f46b8936cafe543dbdab3846efa2dbde",
            //     "width": 910,
            //     "height": 643,
            //     "format": "jpg",
            //     "resource_type": "image",
            //     "created_at": "2025-12-28T20:12:50Z",
            //     "tags": [],
            //     "bytes": 89073,
            //     "type": "upload",
            //     "etag": "81901c28449a450c764e4f665af5969c",
            //     "placeholder": false,
            //     "url": "http://res.cloudinary.com/drtlgof0d/image/upload/v1766952770/samples/assets/gh5lovi0oxw7e4k3xzep.jpg",
            //     "secure_url": "https://res.cloudinary.com/drtlgof0d/image/upload/v1766952770/samples/assets/gh5lovi0oxw7e4k3xzep.jpg",
            //                    https://res.cloudinary.com/drtlgof0d/image/upload/v1766952770/samples/assets/gh5lovi0oxw7e4k3xzep.jpg
            //     "asset_folder": "samples/assets",
            //     "display_name": "gh5lovi0oxw7e4k3xzep",
            //     "original_filename": "industry-industry-4-network-points",
            //     "api_key": "596329271326842"
            // }

            // NOTE: firebase
            //   const result = await doUploadRefrencesToFirebase(
            //     uploadFiles,
            //     firebaseUplaodFolders.F_COMPLAINTS
            //   );
            //   if (result?.success) {
            //     console.log("Files uploaded successfully", result.uploadedUrls);
            //     // Set the uploaded files to the form data
            //     documents = result.uploadedUrls;
            //   } else {
            //     console.log("Error uploading files", result.error);
            //     showToast("error", "Error uploading files");
            //     return;
            //   }
        }
    };

    return (
        <>
            <div className="max-w-4xl px-6 py-10">
                <h1 className="mt-24 mb-4 text-4xl font-bold text-left text-primary">
                    Welcome to my orders page
                </h1>
                <h1 className="mt-24 mb-4 text-4xl font-bold text-left text-primary">
                    REPO : {CONFIGURATIONS.REPO}
                </h1>
                <div className="mt-20">
                    <div className="mt-8 lg:mt-12">
                        <div className="flex items-center gap-2">
                            <span className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-white text-level-6">
                                2
                            </span>
                            <span className="ml-2 font-inter text-[20px] font-medium leading-[30px]">
                                Additional Details
                            </span>
                            <button
                                className="text-white cursor-pointer"
                                onClick={() => submit()}
                            >
                                Upload
                            </button>
                        </div>

                        <ImageUpload
                            label="Images"
                            accept={[
                                referencesFormats.JPEG_JPG,
                                referencesFormats.PNG,
                            ]}
                            outerContainerStyle="mt-4 mb-1 lg:mt-6 lg:mb-2"
                            onFileUpload={onFileUpload}
                            uploadFiles={uploadFiles}
                            isDisabled={isUploadRefrencesToFirebaseLoading}
                            isLoading={isUploadRefrencesToFirebaseLoading}
                            uploadText="Jpeg, Jpg, png, files are allowed"
                            numberOfFiles={5}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Orders;
