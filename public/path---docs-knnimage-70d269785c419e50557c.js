webpackJsonp([0x6c225fa14293],{577:function(n,a){n.exports={data:{markdownRemark:{html:'<p>This class allows you train the last layer of the <a href="https://github.com/PAIR-code/deeplearnjs/tree/master/models/squeezenet">SqueezeNet</a> model to recognize custom images. Based on <a href="https://github.com/PAIR-code/deeplearnjs/tree/master/models/knn_image_classifier">deeplear.js KNN image classifier model</a>.</p>\n<h3>Example</h3>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token comment">// Create the classifier</span>\n<span class="token keyword">const</span> knn <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">p5ml<span class="token punctuation">.</span>KNNImageClassifier</span><span class="token punctuation">(</span>callback<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// Add two image and Index associate with that image</span>\nknn<span class="token punctuation">.</span><span class="token function">addImage</span><span class="token punctuation">(</span>imageOne<span class="token punctuation">,</span> <span class="token string">\'1\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nknn<span class="token punctuation">.</span><span class="token function">addImage</span><span class="token punctuation">(</span>imageTwo<span class="token punctuation">,</span> <span class="token string">\'2\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// Make a prediction. Will return either 1 or 2</span>\nknn<span class="token punctuation">.</span><span class="token function">predict</span><span class="token punctuation">(</span>video<span class="token punctuation">,</span> callback<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<h2>Constructor</h2>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token function">KNNImageClassifier</span><span class="token punctuation">(</span>callback<span class="token punctuation">,</span> <span class="token operator">?</span>numClasses<span class="token punctuation">,</span> <span class="token operator">?</span>knnKValue<span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<blockquote>\n<p><code>callback</code> - A function to run once the model has been loaded.</p>\n</blockquote>\n<blockquote>\n<p><code>numClasses</code> - Max number of classes. Optional, defaults to 15.</p>\n</blockquote>\n<blockquote>\n<p><code>knnKValue</code> - Starting K value. Optional, defaults to 5.</p>\n</blockquote>\n<h2>Properties</h2>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token punctuation">.</span>ready\n</code></pre>\n      </div>\n<blockquote>\n<p>Boolean value that specifies if the model has loaded.</p>\n</blockquote>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token punctuation">.</span>hasAnyTrainedClass\n</code></pre>\n      </div>\n<blockquote>\n<p>Boolean value that specifies if the model has been train on any class.</p>\n</blockquote>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token punctuation">.</span>predicting\n</code></pre>\n      </div>\n<blockquote>\n<p>Boolean value that specifies if the model is currently predicting.</p>\n</blockquote>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token punctuation">.</span>knnKValue\n</code></pre>\n      </div>\n<blockquote>\n<p>Starting K value</p>\n</blockquote>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token punctuation">.</span>numClasses\n</code></pre>\n      </div>\n<blockquote>\n<p>Max number of classes</p>\n</blockquote>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token punctuation">.</span>math\n</code></pre>\n      </div>\n<blockquote>\n<p>The environment Math element.</p>\n</blockquote>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token punctuation">.</span>classifier\n</code></pre>\n      </div>\n<blockquote>\n<p>The KNN Image classifier built with <code>.knnKValue</code> and <code>.numClasses</code>.</p>\n</blockquote>\n<h2>Methods</h2>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token punctuation">.</span><span class="token function">addImage</span><span class="token punctuation">(</span>image<span class="token punctuation">,</span> index<span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<blockquote>\n<p>Trains the model on a given image and index value.</p>\n</blockquote>\n<blockquote>\n<p><code>image</code> -  An image element containing valid pixels.</p>\n</blockquote>\n<blockquote>\n<p><code>index</code> - An integer associated with the image.</p>\n</blockquote>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token punctuation">.</span><span class="token function">predict</span><span class="token punctuation">(</span>image<span class="token punctuation">,</span> callback<span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<blockquote>\n<p>Predicts to which of the training classes does the input image corresponds to. Returns ...</p>\n</blockquote>\n<blockquote>\n<p><code>image</code> -  An image element containing valid pixels.</p>\n</blockquote>\n<blockquote>\n<p><code>callback</code> - A function to be called once the model has made the prediction.</p>\n</blockquote>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token punctuation">.</span><span class="token function">getClassExampleCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<blockquote>\n<p>Get the amount of trained examples for every index.</p>\n</blockquote>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token punctuation">.</span><span class="token function">clearClass</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<blockquote>\n<p>Clears a class associated with an index.</p>\n</blockquote>\n<h2>Static Methods</h2>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token function">loadModel</span><span class="token punctuation">(</span>model<span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<blockquote>\n<p>Loads a deeplearn.js model.</p>\n</blockquote>\n<h2>Source</h2>\n<p><a href="https://github.com/ITPNYU/p5-deeplearn-js/blob/master/src/KNNImage/index.js">/src/KNNImage/index.js</a></p>',frontmatter:{path:"/docs/knnimage",name:"KNN Image Classifier"}}},pathContext:{}}}});
//# sourceMappingURL=path---docs-knnimage-70d269785c419e50557c.js.map