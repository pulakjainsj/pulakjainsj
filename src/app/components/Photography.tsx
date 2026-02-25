import { ImageWithFallback } from './figma/ImageWithFallback';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

const photographyImages = [
  {
    id: 1,
    url: 'https://drive.google.com/thumbnail?id=12WdoKh-lktkbt0d0yNh2n5yG7UKefzp1&sz=w1000',
    category: 'Bike',
  },
  {
    id: 2,
    url: 'https://drive.google.com/thumbnail?id=1qAuzOK9-SFjb1KuFbMI0wORRIMGoYVdz&sz=w1000',
    category: 'Portrait',
  },
  {
    id: 3,
    url: 'https://drive.google.com/thumbnail?id=11rdUgJKz4tt3nF2xoDLkUECq76xk119E&sz=w1000',
    category: 'Landscape',
  },
  {
    id: 4,
    url: 'https://drive.google.com/thumbnail?id=1FKdtWQZz7S7JVL5dhjcwv8dB6FLuNIv-&sz=w1000',
    category: 'Street',
  },
  {
    id: 5,
    url: 'https://drive.google.com/thumbnail?id=1ZT-YIfKOAjyi8MMEkVdFCjrZCwAu4iic&sz=w1000',
    category: 'Product',
  },
  {
    id: 6,
    url: 'https://drive.google.com/thumbnail?id=18PMUhtTCSeaOeeu_6tE01d_jkDD1FaGd&sz=w1000',
    category: 'Architecture',
  },
  {
    id: 7,
    url: 'https://drive.google.com/thumbnail?id=19WAChrdTTcJQfxvCtZ2gRVW0BaJiFd-T&sz=w1000',
    category: 'Event',
  },
  {
    id: 8,
    url: 'https://drive.google.com/thumbnail?id=1ekBbSvMF_Y9TKqyvVans3COWIlSZbbne&sz=w1000',
    category: 'Macro',
  },
  {
    id: 9,
    url: 'https://drive.google.com/thumbnail?id=1wvCjagI7jbgBMbQSXoU4h8z8rW8rpLFG&sz=w1000',
    category: 'Sunset',
  },
  {
    id: 10,
    url: 'https://drive.google.com/thumbnail?id=12S4w_EMyhxKOczbyUnv4dXMOKonIChhH&sz=w1000',
    category: 'Mountain',
  },
  {
    id: 11,
    url: 'https://drive.google.com/thumbnail?id=1ZgFImg24zqC0IdAufA4jYBA9qZHo1BuL&sz=w1000',
    category: 'Nature',
  },
  {
    id: 12,
    url: 'https://drive.google.com/thumbnail?id=1kfBAVc1Q--e823mijLqPMphYmWrY43NY&sz=w1000',
    category: 'Ocean',
  },
  {
    id: 13,
    url: 'https://drive.google.com/thumbnail?id=1Hs71-60Yb0VlbL94n4NVNV8Vgh9rckJ4&sz=w1000',
    category: 'Wildlife',
  },
  {
    id: 15,
    url: 'https://drive.google.com/thumbnail?id=1IGojt8P_Zd06MnQk7XJR7A1H1vYCf7kP&sz=w1000',
    category: 'Photography',
  },
  {
    id: 17,
    url: 'https://drive.google.com/thumbnail?id=1sud4e7XTOkaC7nCprTzvTxXt0hzxvyXd&sz=w1000',
    category: 'Photography',
  },
  {
    id: 18,
    url: 'https://drive.google.com/thumbnail?id=1_O1VgnpHkPWCx8YV6K5mJwgtXVpr_dOW&sz=w1000',
    category: 'Photography',
  },
  {
    id: 19,
    url: 'https://drive.google.com/thumbnail?id=1BjCdNGwplC0VZvQwSP3_ujSiuKPrpbL7&sz=w1000',
    category: 'Photography',
  },
  {
    id: 20,
    url: 'https://drive.google.com/thumbnail?id=1vY0vz9xh-iA2DfkcLElFT9zwBVghWBEf&sz=w1000',
    category: 'Photography',
  },
  {
    id: 21,
    url: 'https://drive.google.com/thumbnail?id=1a3scyu48060XauU_OV2L_dGU65d7e1dg&sz=w1000',
    category: 'Photography',
  },
  {
    id: 22,
    url: 'https://drive.google.com/thumbnail?id=1z651iwB1nwFS2TuRJ4T7PnSch85R2i9K&sz=w1000',
    category: 'Photography',
  },
  {
    id: 23,
    url: 'https://drive.google.com/thumbnail?id=131wbKrTqaKluKOPPlKZsJigedmBIEO4F&sz=w1000',
    category: 'Photography',
  },
  {
    id: 24,
    url: 'https://drive.google.com/thumbnail?id=1lxhZwCZKJP7ybdVNtUOsaqHX5_-4_A7d&sz=w1000',
    category: 'Photography',
  },
  {
    id: 25,
    url: 'https://drive.google.com/thumbnail?id=1ssrLNQO1QST0EgKwd3Q1Ti7p22ZfP5_o&sz=w1000',
    category: 'Photography',
  },
  {
    id: 26,
    url: 'https://drive.google.com/thumbnail?id=1ZVw5_AqlGSL1ih46l6jomrtC6qPowVO2&sz=w1000',
    category: 'Photography',
  },
  {
    id: 27,
    url: 'https://drive.google.com/thumbnail?id=1vnPWXQBW8ToV3-GhddktlgNB035l5AY6&sz=w1000',
    category: 'Photography',
  },
];

export function Photography() {
  return (
    <section id="photography" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Photography</h2>
          {/* removed description */}
        </div>

        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 768: 2, 1024: 3 }}>
          <Masonry gutter="16px">
            {photographyImages.map((image) => (
              <div
                key={image.id}
                className="group relative overflow-hidden rounded-lg bg-gray-200 hover:shadow-xl transition-all duration-300"
              >
                <ImageWithFallback
                  src={image.url}
                  alt={`${image.category} photography`}
                  className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    {/* removed category text */}
                  </div>
                </div>
              </div>
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </section>
  );
}