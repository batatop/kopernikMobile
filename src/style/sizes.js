import { Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')
console.log(width)
console.log(height)

// Text sizes
export const titleSize = 20
export const subtitleSize = 16
export const textSize = 14

// Padding/Margin sizes
export const generalPaddingSize = 18
export const screenPaddingHorSize = 15
export const screenPaddingVerSize = 5
export const postItemContentPaddingSize = 5
export const postItemImgMarginSize = 5

// Heights
export const postHeight = 100
export const mainImgHeight = 120
export const postImgHeight = 200
export const postItemImgHeight = 80
export const galleryImgHeight = 120
export const galleryFocusedImgHeight = 150
export const mapHeight = 350

// Widths
export const drawerBulletWidth = 10