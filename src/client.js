import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "uez9d808",
  dataset: "production",
  apiVersion: "2022-02-01",
  useCdn: true,
  token:
    "sk3fL1emhpDbHEbdrn8ASlilCFsxKfauu8YCuoyVYgej2Nz91gGLnc6sTZzTlXbI7UMFauIaMWhTzIPZJQqcXRHrjVNPoWopBoQgAl5xsxGKNoMuyNBvMhpphe0iTbeEHmimzEHGbADTRjElXG4KKpLuo5wsU38ZPGDMB5KjvvY4kRhiMGYZ",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
