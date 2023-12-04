import Image from "next/image";

export default async function Home() {
  const response = await fetch("https://api.escuelajs.co/api/v1/products");
  const productos = await response.json();

  return (
    <div>
      {productos.map((producto: any) => (
        <a
          key={producto.id}
          href="#"
          className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 mt-2"
        >
          <Image
            className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
            src={producto.images[1]}
            alt={producto.title}
            width={48}
            height={96}
          ></Image>
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {producto.title}
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {producto.description}
            </p>
          </div>
        </a>
      ))}
    </div>
  );
}
