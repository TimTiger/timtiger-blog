本篇文章收集了一些IE的基本知识点，内容多有误，仅供参考。

# 什么是IE
	
英文是Internet Explorer, 最开始叫Microsoft Internet Explorer，或者Windows Internet Explorer. 是一款Microsoft公司开发的跨平台跨操作系统的网页浏览器，1995年跟随Windows 95一起发布，2016年停止更新。2029年便会停止维护。

[更多详情](https://en.wikipedia.org/wiki/Internet_Explorer)

# IE的内核：[Trident](https://en.wikipedia.org/wiki/Trident_(software))

浏览器的内核一般都包含两个重要的组成：JavaScript引擎 和 HTML排版引擎

早期IE的内核可能主要是HTML排版引擎MSHTML，后续的迭代中开发了JS引擎Chakra。 

Trident被设计成组件对象模型（[COM](https://en.wikipedia.org/wiki/Component_Object_Model)。使用这个它不仅仅可以开发一款浏览器，也可以在普通桌面程序中使用它来渲染html编写的界面。比如用来显示一些html编写的、内容很复杂的帮助文档。

# 各大浏览器内核对比：
<table>
	<thead>
		<tr>
			<th>Engine</th>
			<th>Status</th>
      <th>Steward</th>
      <th>License</th>
      <th>Embedded In</th>
		</tr>
	</thead>
	<tbody>
    <tr>
			<td>Trident</td>
			<td style="background-color: #FFB">	Maintained</td>
      <td>Microsoft</td>
      <td>Proprietary</td>
      <td>Internet Explorer browser</td>
		</tr>
  	<tr>
			<td>WebKit</td>
			<td style="background-color: #9F9">Active</td>
      <td>Apple</td>
      <td>GNU LGPL, BSD-style</td>
      <td>Safari browser, plus all browsers for iOS 3+</td>
		</tr>
    <tr>
			<td>Blink</td>
			<td style="background-color: #9F9">Active</td>
      <td>Google</td>
      <td>GNU LGPL, BSD-style</td>
      <td>Google Chrome and all other Chromium-based browsers, notably Microsoft Edge and Opera</td>
		</tr>
    <tr>
			<td>Gecko</td>
			<td style="background-color: #9F9">Active</td>
      <td>Mozilla</td>
      <td>Mozilla Public</td>
      <td>Firefox browser and Thunderbird email client</td>
		</tr>
  </tbody>
</table>

[完整的对比](https://en.wikipedia.org/wiki/Comparison_of_browser_engines)

