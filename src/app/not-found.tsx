import Link from "next/link";

export default function NotFound() {
  return (
    <section className="bg-white dark:bg-gray-900 ">
      <div className="container flex items-center justify-center min-h-screen px-6 pb-12 pt-6 mx-auto">
        <div className="w-full ">
          <div className="flex flex-col items-center max-w-lg mx-auto text-center">
            <p className="text-sm font-medium text-teal-500 dark:text-teal-400">
              404 error
            </p>
            <h1 className="mt-3 text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">
              We lost this page
            </h1>
            <p className="mt-4 text-gray-500 dark:text-gray-400">
              We searched high and low, but couldn&apos;t find what you&apos;re
              looking for.Let&apos;s find a better place for you to go.
            </p>

            <div className="flex items-center w-full mt-6 gap-x-3 shrink-0 sm:w-auto">
              <button className="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg dark:text-gray-200 gap-x-2 sm:w-auto dark:hover:bg-gray-800 dark:bg-gray-900 hover:bg-gray-100 dark:border-gray-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-5 h-5 rtl:rotate-180"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                  />
                </svg>

                <Link href="/about">
                  <span>Go back</span>
                </Link>
              </button>

              <button className="w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-teal-500 rounded-lg shrink-0 sm:w-auto hover:bg-teal-600 dark:hover:bg-teal-500 dark:bg-teal-600">
                <Link href="/">
                  <span>Take me home</span>
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
