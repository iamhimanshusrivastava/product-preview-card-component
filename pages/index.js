import { Fragment } from "react";
import Head from "next/head";

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Product Preview Card Component</title>
        <meta name="description" content="Product preview card component" />
        <link rel="icon" href="/img/favicon-32x32.png" />
      </Head>

      <div className="h-screen flex justify-center items-center bg-cream">
        <div className="p-4 w-[375px] sm:w-[600px] flex flex-col sm:grid sm:grid-cols-2">
          {/* TODO: Use Next Image to make images optimize in <picture></picture> HTML element */}
          <picture>
            <source
              className=""
              srcSet="/img/image-product-mobile.jpg"
              media="(max-width: 639px)"
              type="image/png"
            />
            <img
              className="rounded-tl-xl rounded-tr-xl sm:rounded-bl-xl sm:rounded-r-none"
              src="/img/image-product-desktop.jpg"
              alt="PP"
            />
          </picture>

          <div className="flex flex-col bg-white p-6 sm:p-7 rounded-bl-xl rounded-br-xl sm:rounded-l-none sm:rounded-tr-xl sm:rounded-br-xl">
            <span className="uppercase tracking-[0.35em] text-xs text-darkGrayishBlue font-montserrat">
              Perfume
            </span>
            <h1 className="mt-2 sm:mt-4 text-[32px] leading-8 text-veryDarkBlue font-fraunces font-bold">
              Gabrielle Essence Eau De Parfum
            </h1>
            <p className="mt-4 sm:mt-6 text-sm text-darkGrayishBlue font-montserrat">
              A floral, solar and voluptuous interpretation composed by Olivier
              Polge, Perfumer-Creator for the House of CHANEL.
            </p>
            <div className="mt-6 flex items-center space-x-5">
              <p className="font-fraunces text-3xl text-darkCyan">$149.99</p>
              <p className="font-montserrat text-xs text-darkGrayishBlue">
                <s>$169.99</s>
              </p>
            </div>
            <button className="mt-4 sm:mt-6 flex space-x-2 justify-center items-center py-4 w-full text-xs text-white font-montserrat font-bold bg-darkCyan hover:bg-veryDarkBlue transition ease-in-out delay-75 rounded-lg">
              <svg width="15" height="16" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M14.383 10.388a2.397 2.397 0 0 0-1.518-2.222l1.494-5.593a.8.8 0 0 0-.144-.695.8.8 0 0 0-.631-.28H2.637L2.373.591A.8.8 0 0 0 1.598 0H0v1.598h.983l1.982 7.4a.8.8 0 0 0 .799.59h8.222a.8.8 0 0 1 0 1.599H1.598a.8.8 0 1 0 0 1.598h.943a2.397 2.397 0 1 0 4.507 0h1.885a2.397 2.397 0 1 0 4.331-.376 2.397 2.397 0 0 0 1.12-2.021ZM11.26 7.99H4.395L3.068 3.196h9.477L11.26 7.991Zm-6.465 6.392a.8.8 0 1 1 0-1.598.8.8 0 0 1 0 1.598Zm6.393 0a.8.8 0 1 1 0-1.598.8.8 0 0 1 0 1.598Z"
                  fill="#FFF"
                />
              </svg>{" "}
              <span>Add to Cart</span>
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
