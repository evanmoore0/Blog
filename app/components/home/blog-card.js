import Image from "next/image";

import { CiBitcoin } from "react-icons/ci";

import { FaBitcoin } from "react-icons/fa";

import Link from "next/link";

export default function Card({ Component, title, ne, desc, tags }) {
  return (
    <Link href = "/btc">
      <div className="card w-96 bg-neutral mr-10 mt-8 mb-8 shadow-xl font-mono">
        <figure className=" bg-neutral-content py-10">{Component}</figure>
        <div className="card-body bg-neurtral-100">
          <h2 className="card-title">
            {title}
            <div className="badge badge-secondary ">{ne ? "New" : ""}</div>
          </h2>
          <p>{desc}</p>
          <div className="card-actions justify-end">
            {tags.map((tag, key) => (
              <div className="badge badge-outline">{tag}</div>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}
