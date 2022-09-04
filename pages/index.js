import { Fragment } from "react";

import Image from "next/image";

export default function Home() {
  return (
    <Fragment>
      <div className="h-screen flex justify-center items-center bg-cream">
        <div className="p-4 w-[375px] flex flex-col">
          <Image
            className="rounded-t-xl"
            src="/img/image-product-mobile.jpg"
            width={375}
            height={250}
            layout="responsive"
          />

          <div className="mt-0 flex flex-col bg-white p-6 rounded-b-xl">
            <span className="uppercase tracking-[0.3em] text-xs text-darkGrayishBlue font-montserrat">
              Perfume
            </span>
            <h1 className="mt-2 text-3xl leading-8 text-veryDarkBlue font-fraunces font-bold">
              Gabrielle Essence Eau De Parfum
            </h1>
            <p className="mt-4 text-sm text-darkGrayishBlue font-montserrat">
              A floral, solar and voluptuous interpretation composed by Olivier
              Polge, Perfumer-Creator for the House of CHANEL.
            </p>
            <div className="mt-6 flex items-center space-x-7">
              <p className="font-fraunces text-3xl text-darkCyan">$149.99</p>
              <p className="font-montserrat text-xs text-darkGrayishBlue">
                <s>$169.99</s>
              </p>
            </div>
            <button className="mt-4 flex space-x-2 justify-center items-center py-4 w-full text-xs text-white font-montserrat font-bold bg-darkCyan hover:bg-veryDarkBlue transition ease-in-out delay-75 rounded-lg">
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
