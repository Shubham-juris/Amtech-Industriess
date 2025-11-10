import React, { useEffect, useState } from 'react'
import axios from 'axios'
import localData from "../assets/placeholderImages.json" // 👈 नाम बदला ताकि conflict न हो

const Wholesale = () => {
  const [data, setData] = useState([])
  const [filteredData, setFilteredData] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      try {
        // 🧥 Men’s & Women’s Clothing (FakeStore)
        const resMen = await axios.get("https://fakestoreapi.com/products/category/men's clothing")
        const resWomen = await axios.get("https://fakestoreapi.com/products/category/women's clothing")

        // 👞 Shoes (DummyJSON)
        const resShoes = await axios.get("https://dummyjson.com/products/category/mens-shoes")

        // 👜 Manual + JSON Data Merge
        const manualData = [
          {
            id: 'bag-1',
            title: 'Leather Travel Bag',
            description: 'Stylish brown leather bag perfect for men and women.',
            image: 'https://images.unsplash.com/photo-1600180758890-6b94519a8baa'
          },
          {
            id: 'cap-1',
            title: 'Casual Baseball Cap',
            description: 'Comfortable cotton cap with adjustable strap, ideal for daily wear.',
            image: 'https://images.unsplash.com/photo-1606813902938-7f2c0666f0ae'
          },
          {
            id: 'scarf-1',
            title: 'Winter Woolen Scarf',
            description: 'Soft and warm scarf suitable for both men and women.',
            image: 'https://images.unsplash.com/photo-1615751072497-5d6b3a693b72'
          }
        ]

        // 🧩 Combine All Data
        const combined = [
          ...resMen.data.map(p => ({
            id: `men-${p.id}`,
            title: p.title,
            description: p.description,
            image: p.image
          })),
          ...resWomen.data.map(p => ({
            id: `women-${p.id}`,
            title: p.title,
            description: p.description,
            image: p.image
          })),
          ...resShoes.data.products.map(p => ({
            id: `shoe-${p.id}`,
            title: p.title,
            description: p.description,
            image: p.thumbnail
          })),
          ...manualData,
          ...localData.placeholderImages.map((item) => ({
            id: item.id,
            title: item.description,
            description: item.imageHint,
            image: item.imageUrl
          })) // 👈 JSON से भी data add किया
        ]

        setData(combined)
        setFilteredData(combined)
      } catch (err) {
        console.error('Error fetching data:', err)
        setError('Failed to fetch product data.')
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  // 🔍 Search filter
  useEffect(() => {
    const result = data.filter(item =>
      item.title.toLowerCase().includes(search.toLowerCase())
    )
    setFilteredData(result)
  }, [search, data])

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-5 text-center">Wholesale Fashion & Accessories</h2>

      {/* 🔍 Search Bar */}
      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border rounded-lg px-4 py-2 w-full max-w-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* Error Message */}
      {error && <p className="text-red-600 text-center">{error}</p>}

      {/* Loading */}
      {loading && !error && <p className="text-center">Loading products...</p>}

      {/* Product Grid */}
      {filteredData.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredData.map((item) => (
            <div
              key={item.id}
              className="border rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all bg-white"
            >
              <div className="w-full h-64 flex items-center justify-center bg-gray-50">
                <img
                  src={item.image}
                  alt={item.title}
                  className="max-h-60 w-auto object-contain transition-transform duration-300 hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2 line-clamp-2">{item.title}</h3>
                <p className="text-gray-600 text-sm line-clamp-3">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* No Results */}
      {!loading && !error && filteredData.length === 0 && (
        <p className="text-center text-gray-500 mt-6">No matching products found.</p>
      )}
    </div>
  )
}

export default Wholesale
