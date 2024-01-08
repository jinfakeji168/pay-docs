import{_ as t,o as n,c as s,a}from"./app-9c0a74f5.js";const e={},o=a(`<h1 id="代收通知" tabindex="-1"><a class="header-anchor" href="#代收通知" aria-hidden="true">#</a> 代收通知</h1><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>代收订单状态为 <code>已支付</code> 时，才会通知商户。其他状态的订单不会通知商户。</p></div><p>如果首次通知商户出现异常，会尝试再通知4次，共5次。频率为：0s/10s/10s/30s/30s。时间可能有1~2秒的差异，以实际为准。</p><h3 id="通知参数" tabindex="-1"><a class="header-anchor" href="#通知参数" aria-hidden="true">#</a> 通知参数</h3><table><thead><tr><th>参数</th><th>类型</th><th>参与签名</th><th>说明</th></tr></thead><tbody><tr><td>client_key</td><td>string</td><td>是</td><td>商户标识。由大洋支付颁发。</td></tr><tr><td>signature</td><td>string</td><td>否</td><td>签名值。</td></tr><tr><td>amount</td><td>string</td><td>是</td><td>代收金额。</td></tr><tr><td>channel_id</td><td>string</td><td>是</td><td>代收通道ID。</td></tr><tr><td>trade_no</td><td>string</td><td>是</td><td>代收订单号。</td></tr><tr><td>out_trade_no</td><td>string</td><td>是</td><td>商户代收订单号。</td></tr><tr><td>created_at</td><td>string</td><td>是</td><td>下单时间。UTC+0 时间。</td></tr><tr><td>paid_at</td><td>string</td><td>是</td><td>支付时间。UTC+0 时间。</td></tr><tr><td>status</td><td>integer</td><td>是</td><td><code>1</code> = <code>已支付</code> 。</td></tr></tbody></table><p>示例：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;client_key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;01h349bd08hk3ze70h3zyytaq6&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;signature&quot;</span><span class="token operator">:</span> <span class="token string">&quot;c3ddc1f29b3a4ea123c8df95bf6c6a43a29c90a8331b67ec4e5ad61fe9cdb3b2&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;amount&quot;</span><span class="token operator">:</span> <span class="token string">&quot;100.00&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;channel_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1000&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;trade_no&quot;</span><span class="token operator">:</span> <span class="token string">&quot;100000012023072123389872&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;out_trade_no&quot;</span><span class="token operator">:</span> <span class="token string">&quot;20230101000000&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;created_at&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2023-01-01 00:00:00&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;paid_at&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2023-01-01 00:00:00&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token number">1</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="商户应答" tabindex="-1"><a class="header-anchor" href="#商户应答" aria-hidden="true">#</a> 商户应答</h3><p>请响应 <code>JSON</code> 数据。</p><table><thead><tr><th>参数</th><th>说明</th></tr></thead><tbody><tr><td>code</td><td>状态码。值为 <code>SUCCESS</code> 表示成功，区分大小写。其他代码表示失败。</td></tr></tbody></table><p>示例：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token string">&quot;SUCCESS&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12),d=[o];function p(r,c){return n(),s("div",null,d)}const l=t(e,[["render",p],["__file","notifications.html.vue"]]);export{l as default};
