import { Fragment } from "react";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Product Preview Card Component</title>
        <meta name="description" content="Product preview card component" />
        <link rel="icon" href="/img/favicon-32x32.png" />
      </Head>

      <main>
        <div className="h-screen flex justify-center items-center bg-cream">
          <div className="px-4 sm:px-0 w-[375px] sm:w-[600px] flex flex-col sm:grid sm:grid-cols-2">
            {/* TODO: Use Next Image to make images optimize in <picture></picture> HTML element */}
            <div>
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
                  alt="Gabrielle Essence Eau De Parfum"
                />
              </picture>
            </div>

            <div className="flex flex-col bg-white p-6 sm:p-7 rounded-bl-xl rounded-br-xl sm:rounded-l-none sm:rounded-tr-xl sm:rounded-br-xl">
              <span className="uppercase tracking-[0.35em] text-xs text-darkGrayishBlue font-montserrat">
                Perfume
              </span>
              <h1 className="mt-2 sm:mt-6 text-[32px] sm:text-[33px] leading-8 text-veryDarkBlue font-fraunces font-bold">
                Gabrielle Essence Eau De Parfum
              </h1>
              <p className="mt-4 sm:mt-8 text-sm text-darkGrayishBlue font-montserrat">
                A floral, solar and voluptuous interpretation composed by
                Olivier Polge, Perfumer-Creator for the House of CHANEL.
              </p>
              <div className="mt-6 sm:mt-8 flex items-center space-x-5">
                <p className="font-fraunces text-3xl text-darkCyan">$149.99</p>
                <p className="font-montserrat text-xs text-darkGrayishBlue">
                  <s>$169.99</s>
                </p>
              </div>
              <button className="mt-4 sm:mt-6 flex space-x-2 justify-center items-center py-4 w-full text-xs text-white font-montserrat font-bold bg-darkCyan hover:bg-veryDarkBlue transition ease-in-out delay-75 rounded-lg">
                <Image
                  src="/img/icon-cart.svg"
                  width={15}
                  height={16}
                  alt="Cart Icon"
                />
                <span>Add to Cart</span>
              </button>
            </div>
          </div>
        </div>
      </main>
    </Fragment>
  );
}
