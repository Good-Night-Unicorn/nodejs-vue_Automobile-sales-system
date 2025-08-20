import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useFavoritesStore = defineStore('favorites', () => {
  // 状态
  const favorites = ref([])

  // 计算属性
  const totalFavorites = computed(() => favorites.value.length)

  // 方法
  const addToFavorites = (product) => {
    const existing = favorites.value.find(item => item.id === product.id)
    if (!existing) {
      favorites.value.push(product)
      saveToStorage()
    }
  }

  const removeFromFavorites = (productId) => {
    const index = favorites.value.findIndex(item => item.id === productId)
    if (index > -1) {
      favorites.value.splice(index, 1)
      saveToStorage()
    }
  }

  const isInFavorites = (productId) => {
    return favorites.value.some(item => item.id === productId)
  }

  const clearFavorites = () => {
    favorites.value = []
    saveToStorage()
  }

  const saveToStorage = () => {
    localStorage.setItem('favorites', JSON.stringify(favorites.value))
  }

  const initFromStorage = () => {
    const savedFavorites = localStorage.getItem('favorites')
    if (savedFavorites) {
      favorites.value = JSON.parse(savedFavorites)
    }
  }

  return {
    favorites,
    totalFavorites,
    addToFavorites,
    removeFromFavorites,
    isInFavorites,
    clearFavorites,
    saveToStorage,
    initFromStorage
  }
}) 