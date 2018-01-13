webpackJsonp([40988205159538],{577:function(n,a){n.exports={data:{markdownRemark:{html:'<p>You can use neural networks to recognize the content of images. Imagenet is a class to classify an image using a given model. For now, only the <a href="https://github.com/PAIR-code/deeplearnjs/tree/master/models/squeezenet">SqueezeNet</a> model is available.</p>\n<h3>Example</h3>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token comment">// Create the classifier</span>\n<span class="token keyword">const</span> classifier <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">p5ML<span class="token punctuation">.</span>Imagenet</span><span class="token punctuation">(</span><span class="token string">\'SqueezeNet\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// Make a prediction</span>\n<span class="token keyword">let</span> prediction <span class="token operator">=</span> classifier<span class="token punctuation">.</span><span class="token function">predict</span><span class="token punctuation">(</span>img<span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span> \n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<h2>Constructor</h2>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token function">Imagenet</span><span class="token punctuation">(</span>model<span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<blockquote>\n<p><code>model</code> - A String value for a valid deeplearn.js model for image recognition. Only the <a href="https://github.com/PAIR-code/deeplearnjs/tree/master/models/squeezenet">SqueezeNet</a> model is available.</p>\n</blockquote>\n<h2>Properties</h2>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token punctuation">.</span>model\n</code></pre>\n      </div>\n<blockquote>\n<p>The name of the model used.</p>\n</blockquote>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token punctuation">.</span>ready\n</code></pre>\n      </div>\n<blockquote>\n<p>Boolean value that specifies if the model has loaded.</p>\n</blockquote>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token punctuation">.</span>math\n</code></pre>\n      </div>\n<blockquote>\n<p>The environment Math element.</p>\n</blockquote>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token punctuation">.</span>squeezeNet\n</code></pre>\n      </div>\n<blockquote>\n<p>The <a href="https://github.com/PAIR-code/deeplearnjs/tree/master/models/squeezenet">original SqueezNet model</a> from deeplearn.js </p>\n</blockquote>\n<h2>Methods</h2>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token punctuation">.</span><span class="token function">predict</span><span class="token punctuation">(</span>image<span class="token punctuation">,</span> callback<span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<blockquote>\n<p>Given an image, returns an array of objects containing categories and probabilities.</p>\n</blockquote>\n<blockquote>\n<p><code>image</code> -  An image element containing valid pixels.</p>\n</blockquote>\n<blockquote>\n<p><code>callback</code> - A function to run once the model has made the prediction.</p>\n</blockquote>\n<h2>Static Methods</h2>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token function">loadModel</span><span class="token punctuation">(</span>model<span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<blockquote>\n<p>Loads a deeplearn.js model.</p>\n</blockquote>\n<h2>Source</h2>\n<p><a href="https://github.com/cvalenzuela/p5-deeplearn-js/blob/master/src/ImageNet/index.js">/src/ImageNet/index.js</a></p>',frontmatter:{title:"Documentation",path:"/docs/imagenet",name:"Imagenet"}}},pathContext:{}}}});
//# sourceMappingURL=path---docs-imagenet-91c9b75b387b47e72f9d.js.map