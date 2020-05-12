<div id="gitalk-container"></div>
 
<script>
	const gitalk = new Gitalk({
		clientID: 'b84b30ee7f719ed84b87',
		clientSecret: 'c2158868b3aebc50f8c65a294d20db4b348cdf20',
		repo: 'docs',
		owner: 'hacxiu',
		admin: ['hacxiu'],
		id: location.pathname,    
		// facebook-like distraction free mode
		distractionFreeMode: false
	  })
	  gitalk.render('gitalk-container')
</script>