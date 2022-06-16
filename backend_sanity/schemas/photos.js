export default {
  name: "photos",
  title: "Photo Gallery - My Captures",
  type: "document",
  fields: [
    {
      name: "imagetitle",
      title: "Image Title",
      type: "string",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
    },
    {
      name: "imagedesc",
      title: "Image Description",
      type: "text",
    },
  ],
};