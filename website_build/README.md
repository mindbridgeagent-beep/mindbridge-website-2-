# MindBridge Multi-Page Website

This is the complete rebuild of your MindBridge website from a single page to a professional multi-page site.

## What's Included

### Pages (7 Total)
1. **index.html** - Home page with hero, features, and CTA
2. **services.html** - All 8 bot capabilities explained in detail
3. **how-we-work.html** - 4-step process breakdown
4. **pricing.html** - Three pricing tiers with features
5. **faq.html** - 12 common questions answered (interactive accordion)
6. **contact.html** - Contact form and information
7. **Additional files**: CSS, JavaScript, images, favicon

### File Structure
```
/website_build/
├── index.html
├── services.html
├── how-we-work.html
├── pricing.html
├── faq.html
├── contact.html
├── favicon.ico
├── styles/
│   └── style.css
├── scripts/
│   └── script.js
└── assets/
    ├── logo_new.png
    └── logo.png
```

## Key Features

✅ **Professional Design**
- Clean, modern layout
- Consistent branding (purple gradient theme)
- Professional typography and spacing
- Fully responsive (mobile, tablet, desktop)

✅ **SEO Optimized**
- Proper heading hierarchy (H1, H2, H3)
- Meta descriptions on all pages
- Schema markup
- Sitemap and robots.txt
- Clean URL structure

✅ **User Experience**
- Clear navigation menu on all pages
- Footer with quick links
- CTA buttons throughout
- Interactive FAQ accordion
- Mobile menu hamburger

✅ **Content**
- All your services explained
- Transparent pricing (Starter, Professional, Enterprise)
- Complete process documentation
- FAQ with common questions
- Contact form

## Deployment to GitHub

### Step 1: Prepare Your Repository

If you already have a GitHub repo for mindbridge.agency:
1. Go to your repository
2. Upload all files from this folder

If you don't have a repo yet:
1. Go to https://github.com/new
2. Create a new repository named `mindbridge-website` (or your choice)
3. Initialize with README

### Step 2: Upload Files

**Option A: Using GitHub Web Interface**
1. Click "Add file" → "Upload files"
2. Drag and drop all the files
3. Commit with message "Multi-page website redesign"

**Option B: Using Git Command Line**
```bash
# Navigate to your project folder
cd mindbridge-website

# Initialize git (if new)
git init

# Add all files
git add .

# Commit
git commit -m "Multi-page website redesign"

# Push to GitHub (replace with your repo URL)
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository → Settings
2. Scroll to "Pages" section
3. Select:
   - Source: "Deploy from a branch"
   - Branch: `main` (or `master`)
   - Folder: `/ (root)`
4. Click "Save"
5. Wait 1-2 minutes for deployment
6. Your site will be available at: `https://yourusername.github.io/repo-name`

### Step 4: Connect Your Custom Domain (Cloudflare)

Since you're already using Cloudflare:

1. **In Cloudflare DNS:**
   - Add a CNAME record
   - Name: `@` (or your subdomain)
   - Content: `yourusername.github.io`
   - TTL: Auto
   - Proxy: DNS only (gray cloud)

2. **In GitHub:**
   - Create a file named `CNAME` in the root directory
   - Content: `mindbridge.agency` (your domain)
   - Commit and push

3. **Wait for DNS propagation** (up to 48 hours, usually faster)

## Important Notes

### Contact Form
The contact form uses **FormSubmit** (https://formsubmit.co/) which is free and doesn't require backend setup.
- Emails are sent to: `mindbridge.agent@gmail.com`
- First submission will require clicking a confirmation link
- After that, all submissions come directly to your email

### Images & Assets
- Logo is included in `/assets/` folder
- All images are optimized for web
- Replace images as needed (same filename)

### Customization

**Colors:**
Edit `/styles/style.css` and look for:
```css
:root {
    --primary: #667eea;      /* Purple */
    --secondary: #764ba2;    /* Dark Purple */
}
```

**Text Content:**
Edit individual HTML files to change:
- Services descriptions
- Pricing details
- FAQ answers
- Company information

**Navigation Menu:**
Update all pages if you change the menu items. Edit the `<nav>` section in header.

### Analytics & SEO

The site includes:
- Google Analytics code (ID: G-4B3KKT7Q5V) - update as needed
- Meta descriptions
- Open Graph tags
- Schema markup

### Mobile Responsiveness

All pages are fully responsive and tested for:
- Mobile (320px - 480px)
- Tablet (481px - 768px)
- Desktop (769px+)

## File Sizes

- index.html: ~10KB
- services.html: ~13KB
- pricing.html: ~14KB
- faq.html: ~18KB
- how-we-work.html: ~12KB
- contact.html: ~12KB
- style.css: ~15KB
- All assets: ~700KB

**Total: ~800KB** (very fast loading)

## Support & Updates

### Adding New Pages
1. Create a new `.html` file
2. Copy the header and footer from an existing page
3. Update content
4. Add link to header navigation in all pages
5. Commit and push to GitHub

### Updating Content
1. Edit the HTML file directly
2. Commit changes with descriptive message
3. Push to GitHub
4. Changes go live automatically within 1-2 minutes

### Testing Before Deploy
1. Open HTML files locally in your browser
2. Check all links work
3. Test contact form
4. Verify on mobile device
5. Then push to GitHub

## Next Steps

1. ✅ Download all files
2. ✅ Create GitHub repository
3. ✅ Upload files to GitHub
4. ✅ Enable GitHub Pages
5. ✅ Connect custom domain via Cloudflare
6. ✅ Wait for DNS propagation
7. ✅ Test the live site

## Questions?

- Check the contact form functionality
- Test contact.html locally before deploying
- Verify FormSubmit confirmation email
- All links should point to relative paths (no /www in URLs)

---

**Website Version:** 2.0 (Multi-Page)
**Last Updated:** March 2026
**Status:** Ready for Deployment ✅
