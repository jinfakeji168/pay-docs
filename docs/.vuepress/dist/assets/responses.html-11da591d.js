import{_ as n,o as s,c as a,a as t}from"./app-9c0a74f5.js";const e={},o=t(`<h1 id="响应" tabindex="-1"><a class="header-anchor" href="#响应" aria-hidden="true">#</a> 响应</h1><table><thead><tr><th>HTTP Status</th><th>说明</th></tr></thead><tbody><tr><td>200 OK</td><td>查询成功</td></tr><tr><td>201 Created</td><td>下单成功</td></tr><tr><td>401 Unauthorized</td><td>签名错误</td></tr><tr><td>403 Forbidden</td><td>拒绝访问（通常是商户没有分配指定的通道）</td></tr><tr><td>404 Not Found</td><td>订单未找到</td></tr><tr><td>429 Too Many Requests</td><td>限流（每分钟60次请求）</td></tr><tr><td>422 Unprocessable Content</td><td>表单验证不通过（提交的参数未通过验证）</td></tr><tr><td>500 Internal Server Error</td><td>服务器错误</td></tr></tbody></table><h3 id="成功示例" tabindex="-1"><a class="header-anchor" href="#成功示例" aria-hidden="true">#</a> 成功示例</h3><p><code>200</code></p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;client_key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;01h349bd08hk3ze70h3zyytaq6&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;amount&quot;</span><span class="token operator">:</span> <span class="token string">&quot;100.00&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;trade_no&quot;</span><span class="token operator">:</span> <span class="token string">&quot;100000012023072123389872&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;out_trade_no&quot;</span><span class="token operator">:</span> <span class="token string">&quot;20230101000000&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;created_at&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2023-01-01 00:00:00&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;paid_at&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2023-01-01 00:00:00&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>201</code></p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;client_key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;01h349bd08hk3ze70h3zyytaq6&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;amount&quot;</span><span class="token operator">:</span> <span class="token string">&quot;100.00&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;trade_no&quot;</span><span class="token operator">:</span> <span class="token string">&quot;100000012023072123389872&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;out_trade_no&quot;</span><span class="token operator">:</span> <span class="token string">&quot;20230101000000&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;payment_url&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://example.com/payment/url&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;created_at&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2023-01-01 00:00:00&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="错误示例" tabindex="-1"><a class="header-anchor" href="#错误示例" aria-hidden="true">#</a> 错误示例</h3><p><code>401</code></p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Invalid signature.&quot;</span> 
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>422</code></p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;The out trade no has already been taken.&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;errors&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;out_trade_no&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">&quot;The out trade no has already been taken.&quot;</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>422</code></p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;The out trade no field is required. (and 2 more errors)&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;errors&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;out_trade_no&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">&quot;The out trade no field is required.&quot;</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">&quot;amount&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">&quot;The amount field is required.&quot;</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">&quot;notify_url&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">&quot;The notify url field is required.&quot;</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14),p=[o];function r(i,u){return s(),a("div",null,p)}const c=n(e,[["render",r],["__file","responses.html.vue"]]);export{c as default};
