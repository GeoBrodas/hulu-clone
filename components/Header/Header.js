import Image from 'next/image';

function Header() {
  return (
    <header>
      <h1>HULU</h1>
      <Image
        className="object-contain"
        alt="HULU"
        width={200}
        height={100}
        src="https://links.papareact.com/ua6"
      />
    </header>
  );
}

export default Header;
