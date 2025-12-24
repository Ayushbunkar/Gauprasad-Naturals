# Product Images Guide

## Required Product Images

Place the following product images in this folder:

### 1. sambrani-cup-20.jpg
- **Product:** Desi Cow Dung Natural Herbs Sambrani Havan Cup
- **Pack Size:** 20 Cups
- **Reference:** Orange box with multiple brown cups
- **Recommended Size:** 800x600px or 1200x900px
- **Format:** JPG or PNG

### 2. guggal-sambrani-15.jpg
- **Product:** Cow Dung Guggal Sambrani Dhoop Cup
- **Pack Size:** 15 Pieces
- **Reference:** Pink/beige packaging with circular arrangement
- **Recommended Size:** 800x600px or 1200x900px
- **Format:** JPG or PNG
- **Note:** This is the MOST POPULAR product

### 3. rose-gulab-15.jpg
- **Product:** Cow Dung Rose Gulab Sambrani Dhoop Cup
- **Pack Size:** 15 Pieces
- **Reference:** Pink packaging with rose fragrance
- **Recommended Size:** 800x600px or 1200x900px
- **Format:** JPG or PNG

### 4. loban-frankincense-20.jpg
- **Product:** Cow Dung Loban Frankincense Sambrani Cup
- **Pack Size:** 20 Cups
- **Reference:** Yellow/cream packaging with loban
- **Recommended Size:** 800x600px or 1200x900px
- **Format:** JPG or PNG

### 5. cinnamon-havan-13.jpg
- **Product:** Cow Dung Cinnamon Sambrani Havan Cup with Dhoop
- **Pack Size:** 13 Pieces + Dhoop
- **Reference:** Orange/red packaging with cinnamon variant
- **Recommended Size:** 800x600px or 1200x900px
- **Format:** JPG or PNG

### 6. bulk-temple-100.jpg
- **Product:** Bulk Pack - Multiple Variants
- **Pack Size:** 100 Pieces
- **Reference:** Large quantity display or assorted varieties
- **Recommended Size:** 800x600px or 1200x900px
- **Format:** JPG or PNG

---

## Image Requirements

### Technical Specifications
- **Format:** JPG or PNG (JPG preferred for smaller file size)
- **Dimensions:** Minimum 800x600px, Recommended 1200x900px
- **Aspect Ratio:** 4:3 or 3:2
- **File Size:** Under 500KB for fast loading
- **Background:** White or transparent preferred

### Quality Guidelines
✅ High resolution and clear
✅ Good lighting - natural or professional
✅ Product centered in frame
✅ Show packaging clearly
✅ Include any text/labels visible
✅ Multiple cups visible (if pack)
✅ Clean background

❌ Avoid blurry images
❌ Avoid dark/poor lighting
❌ Avoid cluttered backgrounds
❌ Avoid watermarks (unless brand)

---

## Quick Setup

### Option 1: Copy Your Product Photos
```powershell
# Copy your product photos to this folder
Copy-Item "path\to\your\photo.jpg" ".\sambrani-cup-20.jpg"
```

### Option 2: Download from Your Product Catalog
1. Download high-quality product images
2. Rename them according to the list above
3. Place them in this folder

### Option 3: Take New Photos
**Setup:**
- White background or clean surface
- Natural daylight or ring light
- Phone camera (12MP+) or DSLR
- Multiple angles (front, top, packaging)

**Editing (optional):**
- Crop to center product
- Adjust brightness/contrast
- Remove background if needed
- Compress to under 500KB

---

## Testing Images

After adding images, test the website:

1. Start the dev server:
```powershell
npm run dev
```

2. Navigate to the "Buy Now" section

3. Check if all product images load correctly

4. If image doesn't load, check:
   - File name matches exactly (case-sensitive)
   - File is in `public/images/` folder
   - File format is .jpg or .png
   - Image is not corrupted

---

## Fallback Behavior

If an image fails to load, the website will automatically show:
- Placeholder SVG with product name
- Brown and cream colored design
- Text showing pack quantity

This ensures the website always looks good even without images!

---

## Need Help?

Contact: tech@gauprasad.in
WhatsApp: +91 98765 43210
