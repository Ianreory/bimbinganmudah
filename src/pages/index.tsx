"use client";

import Link from "next/link";

export default function Home() {
  return (
    <div className="text-gray-300 container mx-auto p-2 pb-0 overflow-hidden md:rounded-lg md:p-10 lg:p-2">
      <div className="flex justify-between">
        <h1 className="font-serif text-3xl font-medium">Landing</h1>
        <Link href="/login" className="self-start px-3 py-2 leading-none text-gray-200 border border-gray-800 rounded-lg focus:outline-none focus:shadow-outline bg-gradient-to-b hover:from-indigo-500 from-gray-900 to-black">
          Log in
          </Link>
      </div>

      <div className="h-32 md:h-40"></div>

      <p className="font-sans text-4xl font-bold text-gray-200 max-w-5xl lg:text-7xl lg:pr-24 md:text-6xl">Spend less time coding and more time creating</p>
      <div className="h-10"></div>
      <p className="max-w-2xl font-serif text-xl text-gray-400 md:text-2xl">Imagine being able to spent less time... This is a demonstration landing page made with tailwindcss</p>

      <div className="h-32 md:h-40"></div>

      <div className="grid gap-8 md:grid-cols-2">
        <div className="flex flex-col justify-center">
          <p className="self-start inline font-sans text-xl font-medium text-transparent bg-clip-text bg-gradient-to-br from-green-400 to-green-600">Simple and easy</p>
          <h2 className="text-4xl font-bold">Made for devs and designers</h2>
          <div className="h-6"></div>
          <p className="font-serif text-xl text-gray-400 md:pr-10">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam autem, a recusandae vero praesentium qui impedit doloremque molestias necessitatibus.</p>
          <div className="h-8"></div>
          <div className="grid grid-cols-2 gap-4 pt-8 border-t border-gray-800">
            <div>
              <p className="font-semibold text-gray-400">Made with love</p>
              <div className="h-4"></div>
              <p className="font-serif text-gray-400">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus labor.</p>
            </div>
            <div>
              <p className="font-semibold text-gray-400">It's easy to build</p>
              <div className="h-4"></div>
              <p className="font-serif text-gray-400">Ipsum dolor sit, amet consectetur adipisicing elit. Delectus amet consectetur.</p>
            </div>
          </div>
        </div>
        <div>
          <div className="-mr-24 rounded-lg md:rounded-l-full bg-gradient-to-br from-gray-900 to-black h-96"></div>
        </div>
      </div>

      <div className="h-32 md:h-40"></div>

      <p className="font-serif text-4xl">
        <span className="text-gray-400">If we work all together</span>

        <span className="text-gray-600">consectetur adipisicing elit. Consectetur atque molestiae omnis excepturi enim!</span>
      </p>

      <div className="h-32 md:h-40"></div>

      <div className="grid gap-4 md:grid-cols-3">
        <div className="flex-col p-8 py-16 rounded-lg shadow-2xl md:p-12 bg-gradient-to-br from-gray-900 to-black">
          <p className="flex items-center justify-center text-4xl font-semibold text-green-400 bg-green-800 rounded-full shadow-lg w-14 h-14">1</p>
          <div className="h-6"></div>
          <p className="font-serif text-3xl">We build products with UX in mind</p>
        </div>
        <div className="flex-col p-8 py-16 rounded-lg shadow-2xl md:p-12 bg-gradient-to-b from-gray-900 to-black">
          <p className="flex items-center justify-center text-4xl font-semibold text-indigo-400 bg-indigo-800 rounded-full shadow-lg w-14 h-14">2</p>
          <div className="h-6"></div>
          <p className="font-serif text-3xl">You can trust us to deliver super fast</p>
        </div>
        <div className="flex-col p-8 py-16 rounded-lg shadow-2xl md:p-12 bg-gradient-to-bl from-gray-900 to-black">
          <p className="flex items-center justify-center text-4xl font-semibold text-teal-400 bg-teal-800 rounded-full shadow-lg w-14 h-14">3</p>
          <div className="h-6"></div>
          <p className="font-serif text-3xl">We made it simple and easy to do</p>
        </div>
      </div>

      <div className="h-40"></div>

      <div className="grid gap-8 md:grid-cols-3">
        <div className="flex flex-col justify-center md:col-span-2">
          <p className="self-start inline font-sans text-xl font-medium text-transparent bg-clip-text bg-gradient-to-br from-teal-400 to-teal-600">We are humans</p>
          <h2 className="text-4xl font-bold">We could work together</h2>
          <div className="h-6"></div>
          <p className="font-serif text-xl text-gray-400 md:pr-10">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam autem, a recusandae vero praesentium qui impedit doloremque molestias.</p>
          <div className="h-8"></div>
          <div className="grid gap-6 pt-8 border-t border-gray-800 lg:grid-cols-3">
            <div>
              <p className="font-semibold text-gray-400">Made with love</p>
              <div className="h-4"></div>
              <p className="font-serif text-gray-400">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus labor.</p>
            </div>
            <div>
              <p className="font-semibold text-gray-400">It's easy to build</p>
              <div className="h-4"></div>
              <p className="font-serif text-gray-400">Ipsum dolor sit, amet consectetur adipisicing elit. Delectus amet consectetur.</p>
            </div>
            <div>
              <p className="font-semibold text-gray-400">It's easy to build</p>
              <div className="h-4"></div>
              <p className="font-serif text-gray-400">Ipsum dolor sit, amet consectetur adipisicing elit. Delectus amet consectetur.</p>
            </div>
          </div>
        </div>
        <div>
          <div className="-mr-24 rounded-lg md:rounded-l-full bg-gradient-to-br from-gray-900 to-black h-96"></div>
        </div>
      </div>

      <div className="h-10 md:h-40"></div>

      <div className="mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl text-white">
        <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2">
            <a href="/" aria-label="Go home" title="Company" className="inline-flex items-center">
              <svg className="w-8 text-deep-purple-accent-400" viewBox="0 0 24 24" stroke-linejoin="round" stroke-width="2" stroke-linecap="round" stroke-miterlimit="10" stroke="currentColor" fill="none">
                <rect x="3" y="1" width="7" height="12"></rect>
                <rect x="3" y="17" width="7" height="6"></rect>
                <rect x="14" y="1" width="7" height="6"></rect>
                <rect x="14" y="11" width="7" height="12"></rect>
              </svg>
              <span className="ml-2 text-xl font-bold tracking-wide  uppercase">Company</span>
            </a>
            <div className="mt-6 lg:max-w-sm">
              <p className="text-sm  text-white">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
              <p className="mt-4 text-sm ">Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
            </div>
          </div>
          <div className="space-y-2 text-sm text-white">
            <p className="text-base font-bold tracking-wide ">Contacts</p>
            <div className="flex">
              <p className="mr-1 ">Phone:</p>
              <a href="tel:850-123-5021" aria-label="Our phone" title="Our phone" className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800">
                850-123-5021
              </a>
            </div>
            <div className="flex">
              <p className="mr-1 ">Email:</p>
              <a href="mailto:info@lorem.mail" aria-label="Our email" title="Our email" className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800">
                info@lorem.mail
              </a>
            </div>
            <div className="flex">
              <p className="mr-1 ">Address:</p>
              <a href="https://www.google.com/maps" target="_blank" rel="noopener noreferrer" aria-label="Our address" title="Our address" className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800">
                312 Lovely Street, NY
              </a>
            </div>
          </div>
          <div>
            <span className="text-base font-bold tracking-wide ">Social</span>
            <div className="flex items-center mt-1 space-x-3">
              <a href="/" className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                  <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z"></path>
                </svg>
              </a>
              <a href="/" className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400">
                <svg viewBox="0 0 30 30" fill="currentColor" className="h-6">
                  <circle cx="15" cy="15" r="4"></circle>
                  <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z"></path>
                </svg>
              </a>
              <a href="/" className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                  <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z"></path>
                </svg>
              </a>
            </div>
            <p className="mt-4 text-sm text-gray-500">Bacon ipsum dolor amet short ribs pig sausage prosciutto chicken spare ribs salami.</p>
          </div>
        </div>
        <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
          <p className="text-sm text-gray-600">© Copyright 2020 Lorem Inc. All rights reserved.</p>
          <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
            <li>
              <a href="/" className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">
                F.A.Q
              </a>
            </li>
            <li>
              <a href="/" className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/" className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">
                Terms &amp; Conditions
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
