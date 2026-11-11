/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_WEB3FORMS_ACCESS_KEY?: string;
  readonly VITE_CONTACT_EMAIL?: string;
}

declare module "*.MP4" {
  const src: string;
  export default src;
}
