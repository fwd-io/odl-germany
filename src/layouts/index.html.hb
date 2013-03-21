<!doctype html>
<html lang="{{document.languageName}}">

<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>{{site.title}}</title>
    {{#getBlock "styles" document.pathToRoot "/assets/css/styles.css"}}{{/getBlock}}
	{{#getBlock "meta"}}{{/getBlock}}
	<script src="{{document.pathToRoot}}/assets/js/vendor/svg.js" data-path="{{document.pathToRoot}}/assets/js/vendor"></script>
    <script src="{{document.pathToRoot}}/assets/js/vendor/modernizr.js"></script>
</head>

<body>
	<nav>
		<ul class="horizontal wide">
			<li><a href="http://www.opendevicelab.com">Open Device Labs Worldwide</a></li>
		</ul>
		<span class="language-switch">
			<a href="{{document.pathToRoot}}/{{document.name}}">{{document.languageName}}</a>
			{{#each document.i18n}}
				<a href="{{../document.pathToRoot}}/{{this.file}}.html">{{this.languageName}}</a>
			{{/each}}
		</span>
	</nav>

	<header class="container padded">
		<div class="row">
			<div class="col12">
				<img src="{{document.pathToRoot}}/assets/img/header.svg">
			</div>
		</div>
		<div class="row">
			<div class="col12">
				<p>
				{{{document.content.hero}}}
				</p>
			</div>
		</div>
	</header>

	<div class="container social-quicklinks"><div class="row">
		<div class="col12">
			<ul class="horizontal wide">
				<li>
					<img src="{{document.pathToRoot}}/assets/img/facebook.svg" width="16" height="16">
					<a href="{{{site.facebook}}}">Facebook</a>
				</li>
				<li>
					<img src="{{document.pathToRoot}}/assets/img/twitter.svg" width="16" height="16">
					<a href="http://www.twitter.com/{{site.twitter}}">@{{site.twitter}}</a>
				</li>
				<li>
					<img src="{{document.pathToRoot}}/assets/img/mail.svg" width="22" height="16">
					<a href="mailto:{{{site.email}}}">{{{site.email}}}</a>
				</li>
			</ul>
		</div>
	</div></div>

	<div class="container dark-tile-bg padded">
	<div class="row clearfix quickinfo">
		<div class="col8">
			{{{document.content.quickinfo-1}}}
		</div>
		<div class="col4 last">
			{{{document.content.quickinfo-2}}}
		</div>
	</div>
	</div>

	<div class="container padded">
		<div class="row">
			<div class="col12">
				<h2>Open Device Labs in Germany</h2>
				<div class="map-container">
					<object class="map" data="{{document.pathToRoot}}/assets/img/map.svg">
						<img class="map" src="{{document.pathToRoot}}/assets/img/bitmaps/map.png" />
					</object>
				</div>
			</div>
		</div>
	</div>

    <div class="container dark-tile-bg padded">
      <div class="row clearfix">
        <div id="twitter" class="col6">
          <h2>Twitter: @{{site.twitter}}</h2>
        </div>
        <div class="col6 last">
          <h2>Facebook</h2>
          <iframe src="//www.facebook.com/plugins/likebox.php?href={{#safeurl site.facebook}}{{/safeurl}}&amp;width=292&amp;height=258&amp;show_faces=true&amp;colorscheme=light&amp;stream=false&amp;border_color&amp;header=false&amp;appId={{site.appid}}" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:100%; height:300px;" allowTransparency="true"></iframe>
        </div>
      </div>
    </div>
    {{#if document.partner-logos}}
      <div class="container padded">
        <div class="row">
          <div class="col12">
            <h2>Meet our Partners</h2>
          </div>
        </div>
        <div class="row clearfix">
          {{#each document.partner-logos}}
            <div class="col3 last"><img src="{{this}}" alt="" class="center"></div>
          {{/each}}
        </div>
      </div>
    {{/if}}

    <footer>
      {{{document.content.footer}}}
    </footer>

  <script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
  <!-- local fallback -->
  <script>window.jQuery || document.write('<script src="assets/js/vendor/jquery.1.9.1.min.js"><\/script>')</script>

  {{#getBlock "scripts" document.pathToRoot "/assets/js/main.js" "/assets/js/map.js"}}{{/getBlock}}

  </body>
</html>