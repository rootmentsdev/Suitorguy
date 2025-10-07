// Performance Testing Script for Suitor Guy Website
// Run this in browser console to test performance

console.log('🚀 Suitor Guy Performance Test Started');

// Test 1: Check if critical resources are loaded
function testCriticalResources() {
  const criticalImages = document.querySelectorAll('img[loading="eager"]');
  const preloadedImages = document.querySelectorAll('link[rel="preload"][as="image"]');
  
  console.log('✅ Critical Images:', criticalImages.length);
  console.log('✅ Preloaded Images:', preloadedImages.length);
  
  return {
    criticalImages: criticalImages.length,
    preloadedImages: preloadedImages.length
  };
}

// Test 2: Check Core Web Vitals
function testCoreWebVitals() {
  if ('web-vital' in window) {
    // This would require the web-vitals library
    console.log('📊 Core Web Vitals library detected');
  } else {
    console.log('⚠️ Install web-vitals library for detailed metrics');
  }
}

// Test 3: Check bundle size
function testBundleSize() {
  const scripts = document.querySelectorAll('script[src]');
  let totalSize = 0;
  
  scripts.forEach(script => {
    if (script.src.includes('main.jsx') || script.src.includes('chunk')) {
      console.log('📦 Script:', script.src);
    }
  });
}

// Test 4: Check image optimization
function testImageOptimization() {
  const images = document.querySelectorAll('img');
  let unoptimizedCount = 0;
  
  images.forEach(img => {
    if (!img.loading || img.loading === 'lazy') {
      // Check if it's above the fold
      const rect = img.getBoundingClientRect();
      if (rect.top < window.innerHeight) {
        unoptimizedCount++;
        console.log('⚠️ Above-fold image without eager loading:', img.src);
      }
    }
  });
  
  console.log('🖼️ Unoptimized above-fold images:', unoptimizedCount);
  return unoptimizedCount;
}

// Test 5: Check font loading
function testFontLoading() {
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(() => {
      console.log('✅ All fonts loaded');
    });
  }
  
  const fontLinks = document.querySelectorAll('link[href*="fonts.googleapis.com"]');
  console.log('🔤 Font links:', fontLinks.length);
}

// Run all tests
function runPerformanceTests() {
  console.log('🔍 Running Performance Tests...');
  
  const results = {
    criticalResources: testCriticalResources(),
    bundleSize: testBundleSize(),
    imageOptimization: testImageOptimization(),
    fontLoading: testFontLoading()
  };
  
  console.log('📋 Performance Test Results:', results);
  
  // Recommendations
  console.log('\n💡 Performance Recommendations:');
  console.log('1. Convert images to WebP format');
  console.log('2. Enable Gzip compression on server');
  console.log('3. Use a CDN for static assets');
  console.log('4. Implement service worker for caching');
  console.log('5. Monitor Core Web Vitals regularly');
  
  return results;
}

// Auto-run tests after page load
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', runPerformanceTests);
} else {
  runPerformanceTests();
}

// Export for manual testing
window.suitorGuyPerformanceTest = runPerformanceTests;
