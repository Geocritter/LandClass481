exports.importImage = function(sDate, eDate, roi) {
  // Load the Landsat 8 scaled radiance image collection.
  var landsatCollection = ee.ImageCollection('LANDSAT/LT05/C01/T1')
      .filterDate(sDate, eDate)
      .map(function(image){return image.clip(roi)})
  
  // Make a cloud-free composite.
  var composite = ee.Algorithms.Landsat.simpleComposite({
    collection: landsatCollection,
    asFloat: true
  });
  
  // Visualize the Composite
  return(composite);
}