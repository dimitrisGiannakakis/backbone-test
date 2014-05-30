




<!DOCTYPE html>
<html class="   ">
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    
    
    <title>Backbone.localStorage/backbone.localStorage.js at master · jeromegn/Backbone.localStorage</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub" />
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub" />
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png" />
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png" />
    <meta property="fb:app_id" content="1401488693436528"/>

      <meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="jeromegn/Backbone.localStorage" name="twitter:title" /><meta content="Backbone.localStorage - A localStorage adapter for Backbone.js" name="twitter:description" /><meta content="https://avatars0.githubusercontent.com/u/43325?s=400" name="twitter:image:src" />
<meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="https://avatars0.githubusercontent.com/u/43325?s=400" property="og:image" /><meta content="jeromegn/Backbone.localStorage" property="og:title" /><meta content="https://github.com/jeromegn/Backbone.localStorage" property="og:url" /><meta content="Backbone.localStorage - A localStorage adapter for Backbone.js" property="og:description" />

    <link rel="assets" href="https://assets-cdn.github.com/">
    <link rel="conduit-xhr" href="https://ghconduit.com:25035/">
    <link rel="xhr-socket" href="/_sockets" />

    <meta name="msapplication-TileImage" content="/windows-tile.png" />
    <meta name="msapplication-TileColor" content="#ffffff" />
    <meta name="selected-link" value="repo_source" data-pjax-transient />
      <meta name="google-analytics" content="UA-3769691-2">

    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="collector-cdn.github.com" name="octolytics-script-host" /><meta content="github" name="octolytics-app-id" /><meta content="2EBE5AAB:3D66:93A9396:53889B6B" name="octolytics-dimension-request_id" /><meta content="6340902" name="octolytics-actor-id" /><meta content="dimitrisGiannakakis" name="octolytics-actor-login" /><meta content="92bc19bbf3c0c4f682e39b8d61746ae62c8f01b611ca222a235627dab455c8ba" name="octolytics-actor-hash" />
    

    
    
    <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico" />


    <meta content="authenticity_token" name="csrf-param" />
<meta content="uWZAQwnKoQDJFucAxQxbqYmfENUKzBoMWpDFQi0gKLCBiQ1tfUR8UTlES7SLQ5OXPgEAxR7bAAI19TmBL9Atpw==" name="csrf-token" />

    <link href="https://assets-cdn.github.com/assets/github-382e2d2394fe36287509f9d88e1aae81a78b71b2.css" media="all" rel="stylesheet" type="text/css" />
    <link href="https://assets-cdn.github.com/assets/github2-700c786303eff465608cf2e6e32e27d636038f05.css" media="all" rel="stylesheet" type="text/css" />
    


    <meta http-equiv="x-pjax-version" content="367b402e0291706cc3bfccf2d324be4b">

      
  <meta name="description" content="Backbone.localStorage - A localStorage adapter for Backbone.js" />

  <meta content="43325" name="octolytics-dimension-user_id" /><meta content="jeromegn" name="octolytics-dimension-user_login" /><meta content="1022555" name="octolytics-dimension-repository_id" /><meta content="jeromegn/Backbone.localStorage" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="1022555" name="octolytics-dimension-repository_network_root_id" /><meta content="jeromegn/Backbone.localStorage" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/jeromegn/Backbone.localStorage/commits/master.atom" rel="alternate" title="Recent Commits to Backbone.localStorage:master" type="application/atom+xml" />

  </head>


  <body class="logged_in  env-production linux vis-public page-blob">
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>
    <div class="wrapper">
      
      
      
      


      <div class="header header-logged-in true">
  <div class="container clearfix">

    <a class="header-logo-invertocat" href="https://github.com/">
  <span class="mega-octicon octicon-mark-github"></span>
</a>

    
    <a href="/notifications" aria-label="You have no unread notifications" class="notification-indicator tooltipped tooltipped-s" data-hotkey="g n">
        <span class="mail-status all-read"></span>
</a>

      <div class="command-bar js-command-bar  in-repository">
          <form accept-charset="UTF-8" action="/search" class="command-bar-form" id="top_search_form" method="get">

<div class="commandbar">
  <span class="message"></span>
  <input type="text" data-hotkey="s, /" name="q" id="js-command-bar-field" placeholder="Search or type a command" tabindex="1" autocapitalize="off"
    
    data-username="dimitrisGiannakakis"
      data-repo="jeromegn/Backbone.localStorage"
      data-branch="master"
      data-sha="02116b79763c63765d56f05fdae9440f98c99917"
  >
  <div class="display hidden"></div>
</div>

    <input type="hidden" name="nwo" value="jeromegn/Backbone.localStorage" />

    <div class="select-menu js-menu-container js-select-menu search-context-select-menu">
      <span class="minibutton select-menu-button js-menu-target" role="button" aria-haspopup="true">
        <span class="js-select-button">This repository</span>
      </span>

      <div class="select-menu-modal-holder js-menu-content js-navigation-container" aria-hidden="true">
        <div class="select-menu-modal">

          <div class="select-menu-item js-navigation-item js-this-repository-navigation-item selected">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" class="js-search-this-repository" name="search_target" value="repository" checked="checked" />
            <div class="select-menu-item-text js-select-button-text">This repository</div>
          </div> <!-- /.select-menu-item -->

          <div class="select-menu-item js-navigation-item js-all-repositories-navigation-item">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" name="search_target" value="global" />
            <div class="select-menu-item-text js-select-button-text">All repositories</div>
          </div> <!-- /.select-menu-item -->

        </div>
      </div>
    </div>

  <span class="help tooltipped tooltipped-s" aria-label="Show command bar help">
    <span class="octicon octicon-question"></span>
  </span>


  <input type="hidden" name="ref" value="cmdform">

</form>
        <ul class="top-nav">
          <li class="explore"><a href="/explore">Explore</a></li>
            <li><a href="https://gist.github.com">Gist</a></li>
            <li><a href="/blog">Blog</a></li>
          <li><a href="https://help.github.com">Help</a></li>
        </ul>
      </div>

    


  <ul id="user-links">
    <li>
      <a href="/dimitrisGiannakakis" class="name">
        <img alt="dimitrisGiannakakis" class=" js-avatar" data-user="6340902" height="20" src="https://avatars3.githubusercontent.com/u/6340902?s=140" width="20" /> dimitrisGiannakakis
      </a>
    </li>

    <li class="new-menu dropdown-toggle js-menu-container">
      <a href="#" class="js-menu-target tooltipped tooltipped-s" aria-label="Create new...">
        <span class="octicon octicon-plus"></span>
        <span class="dropdown-arrow"></span>
      </a>

      <div class="new-menu-content js-menu-content">
      </div>
    </li>

    <li>
      <a href="/settings/profile" id="account_settings"
        class="tooltipped tooltipped-s"
        aria-label="Account settings ">
        <span class="octicon octicon-tools"></span>
      </a>
    </li>
    <li>
      <form class="logout-form" action="/logout" method="post">
        <button class="sign-out-button tooltipped tooltipped-s" aria-label="Sign out">
          <span class="octicon octicon-sign-out"></span>
        </button>
      </form>
    </li>

  </ul>

<div class="js-new-dropdown-contents hidden">
  

<ul class="dropdown-menu">
  <li>
    <a href="/new"><span class="octicon octicon-repo"></span> New repository</a>
  </li>
  <li>
    <a href="/organizations/new"><span class="octicon octicon-organization"></span> New organization</a>
  </li>


    <li class="section-title">
      <span title="jeromegn/Backbone.localStorage">This repository</span>
    </li>
      <li>
        <a href="/jeromegn/Backbone.localStorage/issues/new"><span class="octicon octicon-issue-opened"></span> New issue</a>
      </li>
</ul>

</div>


    
  </div>
</div>

      

        



      <div id="start-of-content" class="accessibility-aid"></div>
          <div class="site" itemscope itemtype="http://schema.org/WebPage">
    <div id="js-flash-container">
      
    </div>
    <div class="pagehead repohead instapaper_ignore readability-menu">
      <div class="container">
        

<ul class="pagehead-actions">

    <li class="subscription">
      <form accept-charset="UTF-8" action="/notifications/subscribe" class="js-social-container" data-autosubmit="true" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="authenticity_token" type="hidden" value="JS6o2bhxvAG6oFo51NTUG4gQ+mHceWjqRYLtOZNMIYbBLYyfS7OmjuftXpoDwx+qa530bjxxVdQ3kA2zDW34HQ==" /></div>  <input id="repository_id" name="repository_id" type="hidden" value="1022555" />

    <div class="select-menu js-menu-container js-select-menu">
      <a class="social-count js-social-count" href="/jeromegn/Backbone.localStorage/watchers">
        85
      </a>
      <span class="minibutton select-menu-button with-count js-menu-target" role="button" tabindex="0" aria-haspopup="true">
        <span class="js-select-button">
          <span class="octicon octicon-eye"></span>
          Watch
        </span>
      </span>

      <div class="select-menu-modal-holder">
        <div class="select-menu-modal subscription-menu-modal js-menu-content" aria-hidden="true">
          <div class="select-menu-header">
            <span class="select-menu-title">Notification status</span>
            <span class="octicon octicon-x js-menu-close"></span>
          </div> <!-- /.select-menu-header -->

          <div class="select-menu-list js-navigation-container" role="menu">

            <div class="select-menu-item js-navigation-item selected" role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input checked="checked" id="do_included" name="do" type="radio" value="included" />
                <h4>Not watching</h4>
                <span class="description">You only receive notifications for conversations in which you participate or are @mentioned.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye"></span>
                  Watch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_subscribed" name="do" type="radio" value="subscribed" />
                <h4>Watching</h4>
                <span class="description">You receive notifications for all conversations in this repository.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye"></span>
                  Unwatch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_ignore" name="do" type="radio" value="ignore" />
                <h4>Ignoring</h4>
                <span class="description">You do not receive any notifications for conversations in this repository.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-mute"></span>
                  Stop ignoring
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

          </div> <!-- /.select-menu-list -->

        </div> <!-- /.select-menu-modal -->
      </div> <!-- /.select-menu-modal-holder -->
    </div> <!-- /.select-menu -->

</form>
    </li>

  <li>
  

  <div class="js-toggler-container js-social-container starring-container ">

    <form accept-charset="UTF-8" action="/jeromegn/Backbone.localStorage/unstar" class="js-toggler-form starred" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="authenticity_token" type="hidden" value="t23x4enFIp236qTmPFmGKwJaMOkqURNNsMeVb31KZzcR843vmOtgTShCbsdEUfyS8Jfjzl6t4Wpf6VgKFgbosg==" /></div>
      <button
        class="minibutton with-count js-toggler-target star-button"
        aria-label="Unstar this repository" title="Unstar jeromegn/Backbone.localStorage">
        <span class="octicon octicon-star"></span><span class="text">Unstar</span>
      </button>
        <a class="social-count js-social-count" href="/jeromegn/Backbone.localStorage/stargazers">
          1,451
        </a>
</form>
    <form accept-charset="UTF-8" action="/jeromegn/Backbone.localStorage/star" class="js-toggler-form unstarred" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="authenticity_token" type="hidden" value="Z9cPVnqguLr+mUtsN5tHIGG/n10h71WBEfX3qrKmD/l/w7nZ1aQ2foRfy/V5gHaLVLw08JBphtSKS2nkddvnIw==" /></div>
      <button
        class="minibutton with-count js-toggler-target star-button"
        aria-label="Star this repository" title="Star jeromegn/Backbone.localStorage">
        <span class="octicon octicon-star"></span><span class="text">Star</span>
      </button>
        <a class="social-count js-social-count" href="/jeromegn/Backbone.localStorage/stargazers">
          1,451
        </a>
</form>  </div>

  </li>


        <li>
          <a href="/jeromegn/Backbone.localStorage/fork" class="minibutton with-count js-toggler-target fork-button lighter tooltipped-n" title="Fork your own copy of jeromegn/Backbone.localStorage to your account" aria-label="Fork your own copy of jeromegn/Backbone.localStorage to your account" rel="facebox nofollow">
            <span class="octicon octicon-repo-forked"></span><span class="text">Fork</span>
          </a>
          <a href="/jeromegn/Backbone.localStorage/network" class="social-count">611</a>
        </li>


</ul>

        <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
          <span class="repo-label"><span>public</span></span>
          <span class="mega-octicon octicon-repo"></span>
          <span class="author"><a href="/jeromegn" class="url fn" itemprop="url" rel="author"><span itemprop="title">jeromegn</span></a></span><!--
       --><span class="path-divider">/</span><!--
       --><strong><a href="/jeromegn/Backbone.localStorage" class="js-current-repository js-repo-home-link">Backbone.localStorage</a></strong>

          <span class="page-context-loader">
            <img alt="" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </span>

        </h1>
      </div><!-- /.container -->
    </div><!-- /.repohead -->

    <div class="container">
      <div class="repository-with-sidebar repo-container new-discussion-timeline js-new-discussion-timeline  ">
        <div class="repository-sidebar clearfix">
            

<div class="sunken-menu vertical-right repo-nav js-repo-nav js-repository-container-pjax js-octicon-loaders">
  <div class="sunken-menu-contents">
    <ul class="sunken-menu-group">
      <li class="tooltipped tooltipped-w" aria-label="Code">
        <a href="/jeromegn/Backbone.localStorage" aria-label="Code" class="selected js-selected-navigation-item sunken-menu-item" data-hotkey="g c" data-pjax="true" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /jeromegn/Backbone.localStorage">
          <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

        <li class="tooltipped tooltipped-w" aria-label="Issues">
          <a href="/jeromegn/Backbone.localStorage/issues" aria-label="Issues" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-hotkey="g i" data-selected-links="repo_issues /jeromegn/Backbone.localStorage/issues">
            <span class="octicon octicon-issue-opened"></span> <span class="full-word">Issues</span>
            <span class='counter'>18</span>
            <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>

      <li class="tooltipped tooltipped-w" aria-label="Pull Requests">
        <a href="/jeromegn/Backbone.localStorage/pulls" aria-label="Pull Requests" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-hotkey="g p" data-selected-links="repo_pulls /jeromegn/Backbone.localStorage/pulls">
            <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull Requests</span>
            <span class='counter'>1</span>
            <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>


        <li class="tooltipped tooltipped-w" aria-label="Wiki">
          <a href="/jeromegn/Backbone.localStorage/wiki" aria-label="Wiki" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-hotkey="g w" data-selected-links="repo_wiki /jeromegn/Backbone.localStorage/wiki">
            <span class="octicon octicon-book"></span> <span class="full-word">Wiki</span>
            <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>
    </ul>
    <div class="sunken-menu-separator"></div>
    <ul class="sunken-menu-group">

      <li class="tooltipped tooltipped-w" aria-label="Pulse">
        <a href="/jeromegn/Backbone.localStorage/pulse" aria-label="Pulse" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="pulse /jeromegn/Backbone.localStorage/pulse">
          <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped tooltipped-w" aria-label="Graphs">
        <a href="/jeromegn/Backbone.localStorage/graphs" aria-label="Graphs" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="repo_graphs repo_contributors /jeromegn/Backbone.localStorage/graphs">
          <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped tooltipped-w" aria-label="Network">
        <a href="/jeromegn/Backbone.localStorage/network" aria-label="Network" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-selected-links="repo_network /jeromegn/Backbone.localStorage/network">
          <span class="octicon octicon-repo-forked"></span> <span class="full-word">Network</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>
    </ul>


  </div>
</div>

              <div class="only-with-full-nav">
                

  

<div class="clone-url "
  data-protocol-type="http"
  data-url="/users/set_protocol?protocol_selector=http&amp;protocol_type=clone">
  <h3><strong>HTTPS</strong> clone URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="https://github.com/jeromegn/Backbone.localStorage.git" readonly="readonly">
    <span class="url-box-clippy">
    <button aria-label="copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="https://github.com/jeromegn/Backbone.localStorage.git" data-copied-hint="copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>

  

<div class="clone-url open"
  data-protocol-type="ssh"
  data-url="/users/set_protocol?protocol_selector=ssh&amp;protocol_type=clone">
  <h3><strong>SSH</strong> clone URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="git@github.com:jeromegn/Backbone.localStorage.git" readonly="readonly">
    <span class="url-box-clippy">
    <button aria-label="copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="git@github.com:jeromegn/Backbone.localStorage.git" data-copied-hint="copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>

  

<div class="clone-url "
  data-protocol-type="subversion"
  data-url="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=clone">
  <h3><strong>Subversion</strong> checkout URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="https://github.com/jeromegn/Backbone.localStorage" readonly="readonly">
    <span class="url-box-clippy">
    <button aria-label="copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="https://github.com/jeromegn/Backbone.localStorage" data-copied-hint="copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>


<p class="clone-options">You can clone with
      <a href="#" class="js-clone-selector" data-protocol="http">HTTPS</a>,
      <a href="#" class="js-clone-selector" data-protocol="ssh">SSH</a>,
      or <a href="#" class="js-clone-selector" data-protocol="subversion">Subversion</a>.
  <span class="help tooltipped tooltipped-n" aria-label="Get help on which URL is right for you.">
    <a href="https://help.github.com/articles/which-remote-url-should-i-use">
    <span class="octicon octicon-question"></span>
    </a>
  </span>
</p>



                <a href="/jeromegn/Backbone.localStorage/archive/master.zip"
                   class="minibutton sidebar-button"
                   aria-label="Download jeromegn/Backbone.localStorage as a zip file"
                   title="Download jeromegn/Backbone.localStorage as a zip file"
                   rel="nofollow">
                  <span class="octicon octicon-cloud-download"></span>
                  Download ZIP
                </a>
              </div>
        </div><!-- /.repository-sidebar -->

        <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>
          


<a href="/jeromegn/Backbone.localStorage/blob/c91acbc01a7b84d2ee9bb4e724a5b3cc8321a279/backbone.localStorage.js" class="hidden js-permalink-shortcut" data-hotkey="y">Permalink</a>

<!-- blob contrib key: blob_contributors:v21:dea614a7b272a1227f8692e92e0d6148 -->

<p title="This is a placeholder element" class="js-history-link-replace hidden"></p>

<a href="/jeromegn/Backbone.localStorage/find/master" data-pjax data-hotkey="t" class="js-show-file-finder" style="display:none">Show File Finder</a>

<div class="file-navigation">
  

<div class="select-menu js-menu-container js-select-menu" >
  <span class="minibutton select-menu-button js-menu-target" data-hotkey="w"
    data-master-branch="master"
    data-ref="master"
    role="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <span class="octicon octicon-git-branch"></span>
    <i>branch:</i>
    <span class="js-select-button">master</span>
  </span>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="select-menu-title">Switch branches/tags</span>
        <span class="octicon octicon-x js-menu-close"></span>
      </div> <!-- /.select-menu-header -->

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" class="js-select-menu-tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" class="js-select-menu-tab">Tags</a>
            </li>
          </ul>
        </div><!-- /.select-menu-tabs -->
      </div><!-- /.select-menu-filters -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jeromegn/Backbone.localStorage/blob/gh-pages/backbone.localStorage.js"
                 data-name="gh-pages"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="gh-pages">gh-pages</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item selected">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jeromegn/Backbone.localStorage/blob/master/backbone.localStorage.js"
                 data-name="master"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="master">master</a>
            </div> <!-- /.select-menu-item -->
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jeromegn/Backbone.localStorage/tree/v1.1.7/backbone.localStorage.js"
                 data-name="v1.1.7"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.1.7">v1.1.7</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jeromegn/Backbone.localStorage/tree/v1.1.6/backbone.localStorage.js"
                 data-name="v1.1.6"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.1.6">v1.1.6</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jeromegn/Backbone.localStorage/tree/v1.1.5/backbone.localStorage.js"
                 data-name="v1.1.5"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.1.5">v1.1.5</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jeromegn/Backbone.localStorage/tree/v1.1.4/backbone.localStorage.js"
                 data-name="v1.1.4"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.1.4">v1.1.4</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jeromegn/Backbone.localStorage/tree/v1.1.3/backbone.localStorage.js"
                 data-name="v1.1.3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.1.3">v1.1.3</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jeromegn/Backbone.localStorage/tree/v1.1.2/backbone.localStorage.js"
                 data-name="v1.1.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.1.2">v1.1.2</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jeromegn/Backbone.localStorage/tree/v1.1.1/backbone.localStorage.js"
                 data-name="v1.1.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.1.1">v1.1.1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jeromegn/Backbone.localStorage/tree/v1.1.0/backbone.localStorage.js"
                 data-name="v1.1.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.1.0">v1.1.0</a>
            </div> <!-- /.select-menu-item -->
        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

    </div> <!-- /.select-menu-modal -->
  </div> <!-- /.select-menu-modal-holder -->
</div> <!-- /.select-menu -->

  <div class="breadcrumb">
    <span class='repo-root js-repo-root'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/jeromegn/Backbone.localStorage" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">Backbone.localStorage</span></a></span></span><span class="separator"> / </span><strong class="final-path">backbone.localStorage.js</strong> <button aria-label="copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="backbone.localStorage.js" data-copied-hint="copied!" type="button"><span class="octicon octicon-clippy"></span></button>
  </div>
</div>


  <div class="commit file-history-tease">
      <img alt="Jerome Gravel-Niquet" class="main-avatar js-avatar" data-user="43325" height="24" src="https://avatars3.githubusercontent.com/u/43325?s=140" width="24" />
      <span class="author"><a href="/jeromegn" rel="author">jeromegn</a></span>
      <time datetime="2014-03-17T14:27:53-04:00" is="relative-time" title-format="%Y-%m-%d %H:%M:%S %z" title="2014-03-17 14:27:53 -0400">March 17, 2014</time>
      <div class="commit-title">
          <a href="/jeromegn/Backbone.localStorage/commit/c91acbc01a7b84d2ee9bb4e724a5b3cc8321a279" class="message" data-pjax="true" title="Merge pull request #125 from onecsguy/patch-1

Return boolean on update and create">Merge pull request</a> <a href="https://github.com/jeromegn/Backbone.localStorage/pull/125" class="issue-link" title="Return boolean on update and create">#125</a> <a href="/jeromegn/Backbone.localStorage/commit/c91acbc01a7b84d2ee9bb4e724a5b3cc8321a279" class="message" data-pjax="true" title="Merge pull request #125 from onecsguy/patch-1

Return boolean on update and create">from onecsguy/patch-1</a>
      </div>

    <div class="participation">
      <p class="quickstat"><a href="#blob_contributors_box" rel="facebox"><strong>35</strong>  contributors</a></p>
          <a class="avatar tooltipped tooltipped-s" aria-label="jeromegn" href="/jeromegn/Backbone.localStorage/commits/master/backbone.localStorage.js?author=jeromegn"><img alt="Jerome Gravel-Niquet" class=" js-avatar" data-user="43325" height="20" src="https://avatars3.githubusercontent.com/u/43325?s=140" width="20" /></a>
    <a class="avatar tooltipped tooltipped-s" aria-label="dwt" href="/jeromegn/Backbone.localStorage/commits/master/backbone.localStorage.js?author=dwt"><img alt="Martin Häcker" class=" js-avatar" data-user="57199" height="20" src="https://avatars1.githubusercontent.com/u/57199?s=140" width="20" /></a>
    <a class="avatar tooltipped tooltipped-s" aria-label="nekman" href="/jeromegn/Backbone.localStorage/commits/master/backbone.localStorage.js?author=nekman"><img alt="Nils" class=" js-avatar" data-user="568019" height="20" src="https://avatars0.githubusercontent.com/u/568019?s=140" width="20" /></a>
    <a class="avatar tooltipped tooltipped-s" aria-label="paulmillr" href="/jeromegn/Backbone.localStorage/commits/master/backbone.localStorage.js?author=paulmillr"><img alt="Paul Miller" class=" js-avatar" data-user="574696" height="20" src="https://avatars0.githubusercontent.com/u/574696?s=140" width="20" /></a>
    <a class="avatar tooltipped tooltipped-s" aria-label="ryan-roemer" href="/jeromegn/Backbone.localStorage/commits/master/backbone.localStorage.js?author=ryan-roemer"><img alt="Ryan Roemer" class=" js-avatar" data-user="445557" height="20" src="https://avatars2.githubusercontent.com/u/445557?s=140" width="20" /></a>
    <a class="avatar tooltipped tooltipped-s" aria-label="phoey" href="/jeromegn/Backbone.localStorage/commits/master/backbone.localStorage.js?author=phoey"><img alt="Joseph McElroy" class=" js-avatar" data-user="49480" height="20" src="https://avatars0.githubusercontent.com/u/49480?s=140" width="20" /></a>
    <a class="avatar tooltipped tooltipped-s" aria-label="uzikilon" href="/jeromegn/Backbone.localStorage/commits/master/backbone.localStorage.js?author=uzikilon"><img alt="Uzi Kilon" class=" js-avatar" data-user="874904" height="20" src="https://avatars1.githubusercontent.com/u/874904?s=140" width="20" /></a>
    <a class="avatar tooltipped tooltipped-s" aria-label="jayproulx" href="/jeromegn/Backbone.localStorage/commits/master/backbone.localStorage.js?author=jayproulx"><img alt="Jay Proulx" class=" js-avatar" data-user="157145" height="20" src="https://avatars0.githubusercontent.com/u/157145?s=140" width="20" /></a>
    <a class="avatar tooltipped tooltipped-s" aria-label="dfcreative" href="/jeromegn/Backbone.localStorage/commits/master/backbone.localStorage.js?author=dfcreative"><img alt="Dmitry Ivanov" class=" js-avatar" data-user="300067" height="20" src="https://avatars3.githubusercontent.com/u/300067?s=140" width="20" /></a>
    <a class="avatar tooltipped tooltipped-s" aria-label="nerdgore" href="/jeromegn/Backbone.localStorage/commits/master/backbone.localStorage.js?author=nerdgore"><img alt="Torsten Walter" class=" js-avatar" data-user="1582533" height="20" src="https://avatars2.githubusercontent.com/u/1582533?s=140" width="20" /></a>
    <a class="avatar tooltipped tooltipped-s" aria-label="eastridge" href="/jeromegn/Backbone.localStorage/commits/master/backbone.localStorage.js?author=eastridge"><img alt="Ryan Eastridge" class=" js-avatar" data-user="30921" height="20" src="https://avatars2.githubusercontent.com/u/30921?s=140" width="20" /></a>
    <a class="avatar tooltipped tooltipped-s" aria-label="zertosh" href="/jeromegn/Backbone.localStorage/commits/master/backbone.localStorage.js?author=zertosh"><img alt="Andres Suarez" class=" js-avatar" data-user="830952" height="20" src="https://avatars3.githubusercontent.com/u/830952?s=140" width="20" /></a>
    <a class="avatar tooltipped tooltipped-s" aria-label="yakubori" href="/jeromegn/Backbone.localStorage/commits/master/backbone.localStorage.js?author=yakubori"><img alt="Rick Yakubowski" class=" js-avatar" data-user="166437" height="20" src="https://avatars0.githubusercontent.com/u/166437?s=140" width="20" /></a>
    <a class="avatar tooltipped tooltipped-s" aria-label="rbu" href="/jeromegn/Backbone.localStorage/commits/master/backbone.localStorage.js?author=rbu"><img alt="Robert Buchholz" class=" js-avatar" data-user="65913" height="20" src="https://avatars2.githubusercontent.com/u/65913?s=140" width="20" /></a>
    <a class="avatar tooltipped tooltipped-s" aria-label="tlray" href="/jeromegn/Backbone.localStorage/commits/master/backbone.localStorage.js?author=tlray"><img alt="Raymond Vellener" class=" js-avatar" data-user="239681" height="20" src="https://avatars1.githubusercontent.com/u/239681?s=140" width="20" /></a>
    <a class="avatar tooltipped tooltipped-s" aria-label="ryangreenberg" href="/jeromegn/Backbone.localStorage/commits/master/backbone.localStorage.js?author=ryangreenberg"><img alt="Ryan Greenberg" class=" js-avatar" data-user="134712" height="20" src="https://avatars0.githubusercontent.com/u/134712?s=140" width="20" /></a>
    <a class="avatar tooltipped tooltipped-s" aria-label="ssorallen" href="/jeromegn/Backbone.localStorage/commits/master/backbone.localStorage.js?author=ssorallen"><img alt="Ross Allen" class=" js-avatar" data-user="29612" height="20" src="https://avatars3.githubusercontent.com/u/29612?s=140" width="20" /></a>
    <a class="avatar tooltipped tooltipped-s" aria-label="schickling" href="/jeromegn/Backbone.localStorage/commits/master/backbone.localStorage.js?author=schickling"><img alt="Johannes Schickling" class=" js-avatar" data-user="1567498" height="20" src="https://avatars1.githubusercontent.com/u/1567498?s=140" width="20" /></a>
    <a class="avatar tooltipped tooltipped-s" aria-label="marlun78" href="/jeromegn/Backbone.localStorage/commits/master/backbone.localStorage.js?author=marlun78"><img alt="Martin Eneqvist" class=" js-avatar" data-user="61943" height="20" src="https://avatars0.githubusercontent.com/u/61943?s=140" width="20" /></a>
    <a class="avatar tooltipped tooltipped-s" aria-label="igoralekseev" href="/jeromegn/Backbone.localStorage/commits/master/backbone.localStorage.js?author=igoralekseev"><img alt="igor" class=" js-avatar" data-user="60734" height="20" src="https://avatars3.githubusercontent.com/u/60734?s=140" width="20" /></a>
    <a class="avatar tooltipped tooltipped-s" aria-label="kmchugh" href="/jeromegn/Backbone.localStorage/commits/master/backbone.localStorage.js?author=kmchugh"><img alt="Ken McHugh" class=" js-avatar" data-user="1219541" height="20" src="https://avatars3.githubusercontent.com/u/1219541?s=140" width="20" /></a>
    <a class="avatar tooltipped tooltipped-s" aria-label="juhovh" href="/jeromegn/Backbone.localStorage/commits/master/backbone.localStorage.js?author=juhovh"><img alt="" class=" js-avatar" data-user="262958" height="20" src="https://avatars3.githubusercontent.com/u/262958?s=140" width="20" /></a>
    <a class="avatar tooltipped tooltipped-s" aria-label="seanCodes" href="/jeromegn/Backbone.localStorage/commits/master/backbone.localStorage.js?author=seanCodes"><img alt="Sean Juarez" class=" js-avatar" data-user="1609890" height="20" src="https://avatars2.githubusercontent.com/u/1609890?s=140" width="20" /></a>
    <a class="avatar tooltipped tooltipped-s" aria-label="spiralman" href="/jeromegn/Backbone.localStorage/commits/master/backbone.localStorage.js?author=spiralman"><img alt="Thomas Stephens" class=" js-avatar" data-user="1293832" height="20" src="https://avatars0.githubusercontent.com/u/1293832?s=140" width="20" /></a>
    <a class="avatar tooltipped tooltipped-s" aria-label="jblashill" href="/jeromegn/Backbone.localStorage/commits/master/backbone.localStorage.js?author=jblashill"><img alt="James Blashill" class=" js-avatar" data-user="1558017" height="20" src="https://avatars1.githubusercontent.com/u/1558017?s=140" width="20" /></a>
    <a class="avatar tooltipped tooltipped-s" aria-label="toshi00ysm" href="/jeromegn/Backbone.localStorage/commits/master/backbone.localStorage.js?author=toshi00ysm"><img alt="toshi00ysm" class=" js-avatar" data-user="2410794" height="20" src="https://avatars3.githubusercontent.com/u/2410794?s=140" width="20" /></a>

      <a href="#blob_contributors_box" rel="facebox" class="others-text">and others</a>

    </div>
    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list">
          <li class="facebox-user-list-item">
            <img alt="Jerome Gravel-Niquet" class=" js-avatar" data-user="43325" height="24" src="https://avatars3.githubusercontent.com/u/43325?s=140" width="24" />
            <a href="/jeromegn">jeromegn</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Martin Häcker" class=" js-avatar" data-user="57199" height="24" src="https://avatars1.githubusercontent.com/u/57199?s=140" width="24" />
            <a href="/dwt">dwt</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Nils" class=" js-avatar" data-user="568019" height="24" src="https://avatars0.githubusercontent.com/u/568019?s=140" width="24" />
            <a href="/nekman">nekman</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Paul Miller" class=" js-avatar" data-user="574696" height="24" src="https://avatars0.githubusercontent.com/u/574696?s=140" width="24" />
            <a href="/paulmillr">paulmillr</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Ryan Roemer" class=" js-avatar" data-user="445557" height="24" src="https://avatars2.githubusercontent.com/u/445557?s=140" width="24" />
            <a href="/ryan-roemer">ryan-roemer</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Joseph McElroy" class=" js-avatar" data-user="49480" height="24" src="https://avatars0.githubusercontent.com/u/49480?s=140" width="24" />
            <a href="/phoey">phoey</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Uzi Kilon" class=" js-avatar" data-user="874904" height="24" src="https://avatars1.githubusercontent.com/u/874904?s=140" width="24" />
            <a href="/uzikilon">uzikilon</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Jay Proulx" class=" js-avatar" data-user="157145" height="24" src="https://avatars0.githubusercontent.com/u/157145?s=140" width="24" />
            <a href="/jayproulx">jayproulx</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Dmitry Ivanov" class=" js-avatar" data-user="300067" height="24" src="https://avatars3.githubusercontent.com/u/300067?s=140" width="24" />
            <a href="/dfcreative">dfcreative</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Torsten Walter" class=" js-avatar" data-user="1582533" height="24" src="https://avatars2.githubusercontent.com/u/1582533?s=140" width="24" />
            <a href="/nerdgore">nerdgore</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Ryan Eastridge" class=" js-avatar" data-user="30921" height="24" src="https://avatars2.githubusercontent.com/u/30921?s=140" width="24" />
            <a href="/eastridge">eastridge</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Andres Suarez" class=" js-avatar" data-user="830952" height="24" src="https://avatars3.githubusercontent.com/u/830952?s=140" width="24" />
            <a href="/zertosh">zertosh</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Rick Yakubowski" class=" js-avatar" data-user="166437" height="24" src="https://avatars0.githubusercontent.com/u/166437?s=140" width="24" />
            <a href="/yakubori">yakubori</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Robert Buchholz" class=" js-avatar" data-user="65913" height="24" src="https://avatars2.githubusercontent.com/u/65913?s=140" width="24" />
            <a href="/rbu">rbu</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Raymond Vellener" class=" js-avatar" data-user="239681" height="24" src="https://avatars1.githubusercontent.com/u/239681?s=140" width="24" />
            <a href="/tlray">tlray</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Ryan Greenberg" class=" js-avatar" data-user="134712" height="24" src="https://avatars0.githubusercontent.com/u/134712?s=140" width="24" />
            <a href="/ryangreenberg">ryangreenberg</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Ross Allen" class=" js-avatar" data-user="29612" height="24" src="https://avatars3.githubusercontent.com/u/29612?s=140" width="24" />
            <a href="/ssorallen">ssorallen</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Johannes Schickling" class=" js-avatar" data-user="1567498" height="24" src="https://avatars1.githubusercontent.com/u/1567498?s=140" width="24" />
            <a href="/schickling">schickling</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Martin Eneqvist" class=" js-avatar" data-user="61943" height="24" src="https://avatars0.githubusercontent.com/u/61943?s=140" width="24" />
            <a href="/marlun78">marlun78</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="igor" class=" js-avatar" data-user="60734" height="24" src="https://avatars3.githubusercontent.com/u/60734?s=140" width="24" />
            <a href="/igoralekseev">igoralekseev</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Ken McHugh" class=" js-avatar" data-user="1219541" height="24" src="https://avatars3.githubusercontent.com/u/1219541?s=140" width="24" />
            <a href="/kmchugh">kmchugh</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="" class=" js-avatar" data-user="262958" height="24" src="https://avatars3.githubusercontent.com/u/262958?s=140" width="24" />
            <a href="/juhovh">juhovh</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Sean Juarez" class=" js-avatar" data-user="1609890" height="24" src="https://avatars2.githubusercontent.com/u/1609890?s=140" width="24" />
            <a href="/seanCodes">seanCodes</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Thomas Stephens" class=" js-avatar" data-user="1293832" height="24" src="https://avatars0.githubusercontent.com/u/1293832?s=140" width="24" />
            <a href="/spiralman">spiralman</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="James Blashill" class=" js-avatar" data-user="1558017" height="24" src="https://avatars1.githubusercontent.com/u/1558017?s=140" width="24" />
            <a href="/jblashill">jblashill</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="toshi00ysm" class=" js-avatar" data-user="2410794" height="24" src="https://avatars3.githubusercontent.com/u/2410794?s=140" width="24" />
            <a href="/toshi00ysm">toshi00ysm</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Dmitry Shirokov" class=" js-avatar" data-user="903687" height="24" src="https://avatars1.githubusercontent.com/u/903687?s=140" width="24" />
            <a href="/runk">runk</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Dan McGrady" class=" js-avatar" data-user="12528" height="24" src="https://avatars1.githubusercontent.com/u/12528?s=140" width="24" />
            <a href="/dmix">dmix</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Kirill Korolyov" class=" js-avatar" data-user="242202" height="24" src="https://avatars1.githubusercontent.com/u/242202?s=140" width="24" />
            <a href="/Dremora">Dremora</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="onecsguy" class=" js-avatar" data-user="1801892" height="24" src="https://avatars1.githubusercontent.com/u/1801892?s=140" width="24" />
            <a href="/onecsguy">onecsguy</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Brandon Dimcheff" class=" js-avatar" data-user="14111" height="24" src="https://avatars2.githubusercontent.com/u/14111?s=140" width="24" />
            <a href="/bdimcheff">bdimcheff</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Andreas Cederström" class=" js-avatar" data-user="33141" height="24" src="https://avatars2.githubusercontent.com/u/33141?s=140" width="24" />
            <a href="/andriijas">andriijas</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Andrey Popp" class=" js-avatar" data-user="30594" height="24" src="https://avatars3.githubusercontent.com/u/30594?s=140" width="24" />
            <a href="/andreypopp">andreypopp</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Andrew Kulinich" class=" js-avatar" data-user="596990" height="24" src="https://avatars0.githubusercontent.com/u/596990?s=140" width="24" />
            <a href="/4vanger">4vanger</a>
          </li>
      </ul>
    </div>
  </div>

<div class="file-box">
  <div class="file">
    <div class="meta clearfix">
      <div class="info file-name">
        <span class="icon"><b class="octicon octicon-file-text"></b></span>
        <span class="mode" title="File Mode">file</span>
        <span class="meta-divider"></span>
          <span>248 lines (211 sloc)</span>
          <span class="meta-divider"></span>
        <span>7.214 kb</span>
      </div>
      <div class="actions">
        <div class="button-group">
                <a class="minibutton tooltipped tooltipped-n js-update-url-with-hash"
                   aria-label="Clicking this button will automatically fork this project so you can edit the file"
                   href="/jeromegn/Backbone.localStorage/edit/master/backbone.localStorage.js"
                   data-method="post" rel="nofollow">Edit</a>
          <a href="/jeromegn/Backbone.localStorage/raw/master/backbone.localStorage.js" class="button minibutton " id="raw-url">Raw</a>
            <a href="/jeromegn/Backbone.localStorage/blame/master/backbone.localStorage.js" class="button minibutton js-update-url-with-hash">Blame</a>
          <a href="/jeromegn/Backbone.localStorage/commits/master/backbone.localStorage.js" class="button minibutton " rel="nofollow">History</a>
        </div><!-- /.button-group -->

            <a class="minibutton danger empty-icon tooltipped tooltipped-s"
               href="/jeromegn/Backbone.localStorage/delete/master/backbone.localStorage.js"
               aria-label="Fork this project and delete file"
               data-method="post" data-test-id="delete-blob-file" rel="nofollow">

          Delete
        </a>
      </div><!-- /.actions -->
    </div>
      
  <div class="blob-wrapper data type-javascript js-blob-data">
       <table class="file-code file-diff tab-size-8">
         <tr class="file-code-line">
           <td class="blob-line-nums">
             <span id="L1" rel="#L1">1</span>
<span id="L2" rel="#L2">2</span>
<span id="L3" rel="#L3">3</span>
<span id="L4" rel="#L4">4</span>
<span id="L5" rel="#L5">5</span>
<span id="L6" rel="#L6">6</span>
<span id="L7" rel="#L7">7</span>
<span id="L8" rel="#L8">8</span>
<span id="L9" rel="#L9">9</span>
<span id="L10" rel="#L10">10</span>
<span id="L11" rel="#L11">11</span>
<span id="L12" rel="#L12">12</span>
<span id="L13" rel="#L13">13</span>
<span id="L14" rel="#L14">14</span>
<span id="L15" rel="#L15">15</span>
<span id="L16" rel="#L16">16</span>
<span id="L17" rel="#L17">17</span>
<span id="L18" rel="#L18">18</span>
<span id="L19" rel="#L19">19</span>
<span id="L20" rel="#L20">20</span>
<span id="L21" rel="#L21">21</span>
<span id="L22" rel="#L22">22</span>
<span id="L23" rel="#L23">23</span>
<span id="L24" rel="#L24">24</span>
<span id="L25" rel="#L25">25</span>
<span id="L26" rel="#L26">26</span>
<span id="L27" rel="#L27">27</span>
<span id="L28" rel="#L28">28</span>
<span id="L29" rel="#L29">29</span>
<span id="L30" rel="#L30">30</span>
<span id="L31" rel="#L31">31</span>
<span id="L32" rel="#L32">32</span>
<span id="L33" rel="#L33">33</span>
<span id="L34" rel="#L34">34</span>
<span id="L35" rel="#L35">35</span>
<span id="L36" rel="#L36">36</span>
<span id="L37" rel="#L37">37</span>
<span id="L38" rel="#L38">38</span>
<span id="L39" rel="#L39">39</span>
<span id="L40" rel="#L40">40</span>
<span id="L41" rel="#L41">41</span>
<span id="L42" rel="#L42">42</span>
<span id="L43" rel="#L43">43</span>
<span id="L44" rel="#L44">44</span>
<span id="L45" rel="#L45">45</span>
<span id="L46" rel="#L46">46</span>
<span id="L47" rel="#L47">47</span>
<span id="L48" rel="#L48">48</span>
<span id="L49" rel="#L49">49</span>
<span id="L50" rel="#L50">50</span>
<span id="L51" rel="#L51">51</span>
<span id="L52" rel="#L52">52</span>
<span id="L53" rel="#L53">53</span>
<span id="L54" rel="#L54">54</span>
<span id="L55" rel="#L55">55</span>
<span id="L56" rel="#L56">56</span>
<span id="L57" rel="#L57">57</span>
<span id="L58" rel="#L58">58</span>
<span id="L59" rel="#L59">59</span>
<span id="L60" rel="#L60">60</span>
<span id="L61" rel="#L61">61</span>
<span id="L62" rel="#L62">62</span>
<span id="L63" rel="#L63">63</span>
<span id="L64" rel="#L64">64</span>
<span id="L65" rel="#L65">65</span>
<span id="L66" rel="#L66">66</span>
<span id="L67" rel="#L67">67</span>
<span id="L68" rel="#L68">68</span>
<span id="L69" rel="#L69">69</span>
<span id="L70" rel="#L70">70</span>
<span id="L71" rel="#L71">71</span>
<span id="L72" rel="#L72">72</span>
<span id="L73" rel="#L73">73</span>
<span id="L74" rel="#L74">74</span>
<span id="L75" rel="#L75">75</span>
<span id="L76" rel="#L76">76</span>
<span id="L77" rel="#L77">77</span>
<span id="L78" rel="#L78">78</span>
<span id="L79" rel="#L79">79</span>
<span id="L80" rel="#L80">80</span>
<span id="L81" rel="#L81">81</span>
<span id="L82" rel="#L82">82</span>
<span id="L83" rel="#L83">83</span>
<span id="L84" rel="#L84">84</span>
<span id="L85" rel="#L85">85</span>
<span id="L86" rel="#L86">86</span>
<span id="L87" rel="#L87">87</span>
<span id="L88" rel="#L88">88</span>
<span id="L89" rel="#L89">89</span>
<span id="L90" rel="#L90">90</span>
<span id="L91" rel="#L91">91</span>
<span id="L92" rel="#L92">92</span>
<span id="L93" rel="#L93">93</span>
<span id="L94" rel="#L94">94</span>
<span id="L95" rel="#L95">95</span>
<span id="L96" rel="#L96">96</span>
<span id="L97" rel="#L97">97</span>
<span id="L98" rel="#L98">98</span>
<span id="L99" rel="#L99">99</span>
<span id="L100" rel="#L100">100</span>
<span id="L101" rel="#L101">101</span>
<span id="L102" rel="#L102">102</span>
<span id="L103" rel="#L103">103</span>
<span id="L104" rel="#L104">104</span>
<span id="L105" rel="#L105">105</span>
<span id="L106" rel="#L106">106</span>
<span id="L107" rel="#L107">107</span>
<span id="L108" rel="#L108">108</span>
<span id="L109" rel="#L109">109</span>
<span id="L110" rel="#L110">110</span>
<span id="L111" rel="#L111">111</span>
<span id="L112" rel="#L112">112</span>
<span id="L113" rel="#L113">113</span>
<span id="L114" rel="#L114">114</span>
<span id="L115" rel="#L115">115</span>
<span id="L116" rel="#L116">116</span>
<span id="L117" rel="#L117">117</span>
<span id="L118" rel="#L118">118</span>
<span id="L119" rel="#L119">119</span>
<span id="L120" rel="#L120">120</span>
<span id="L121" rel="#L121">121</span>
<span id="L122" rel="#L122">122</span>
<span id="L123" rel="#L123">123</span>
<span id="L124" rel="#L124">124</span>
<span id="L125" rel="#L125">125</span>
<span id="L126" rel="#L126">126</span>
<span id="L127" rel="#L127">127</span>
<span id="L128" rel="#L128">128</span>
<span id="L129" rel="#L129">129</span>
<span id="L130" rel="#L130">130</span>
<span id="L131" rel="#L131">131</span>
<span id="L132" rel="#L132">132</span>
<span id="L133" rel="#L133">133</span>
<span id="L134" rel="#L134">134</span>
<span id="L135" rel="#L135">135</span>
<span id="L136" rel="#L136">136</span>
<span id="L137" rel="#L137">137</span>
<span id="L138" rel="#L138">138</span>
<span id="L139" rel="#L139">139</span>
<span id="L140" rel="#L140">140</span>
<span id="L141" rel="#L141">141</span>
<span id="L142" rel="#L142">142</span>
<span id="L143" rel="#L143">143</span>
<span id="L144" rel="#L144">144</span>
<span id="L145" rel="#L145">145</span>
<span id="L146" rel="#L146">146</span>
<span id="L147" rel="#L147">147</span>
<span id="L148" rel="#L148">148</span>
<span id="L149" rel="#L149">149</span>
<span id="L150" rel="#L150">150</span>
<span id="L151" rel="#L151">151</span>
<span id="L152" rel="#L152">152</span>
<span id="L153" rel="#L153">153</span>
<span id="L154" rel="#L154">154</span>
<span id="L155" rel="#L155">155</span>
<span id="L156" rel="#L156">156</span>
<span id="L157" rel="#L157">157</span>
<span id="L158" rel="#L158">158</span>
<span id="L159" rel="#L159">159</span>
<span id="L160" rel="#L160">160</span>
<span id="L161" rel="#L161">161</span>
<span id="L162" rel="#L162">162</span>
<span id="L163" rel="#L163">163</span>
<span id="L164" rel="#L164">164</span>
<span id="L165" rel="#L165">165</span>
<span id="L166" rel="#L166">166</span>
<span id="L167" rel="#L167">167</span>
<span id="L168" rel="#L168">168</span>
<span id="L169" rel="#L169">169</span>
<span id="L170" rel="#L170">170</span>
<span id="L171" rel="#L171">171</span>
<span id="L172" rel="#L172">172</span>
<span id="L173" rel="#L173">173</span>
<span id="L174" rel="#L174">174</span>
<span id="L175" rel="#L175">175</span>
<span id="L176" rel="#L176">176</span>
<span id="L177" rel="#L177">177</span>
<span id="L178" rel="#L178">178</span>
<span id="L179" rel="#L179">179</span>
<span id="L180" rel="#L180">180</span>
<span id="L181" rel="#L181">181</span>
<span id="L182" rel="#L182">182</span>
<span id="L183" rel="#L183">183</span>
<span id="L184" rel="#L184">184</span>
<span id="L185" rel="#L185">185</span>
<span id="L186" rel="#L186">186</span>
<span id="L187" rel="#L187">187</span>
<span id="L188" rel="#L188">188</span>
<span id="L189" rel="#L189">189</span>
<span id="L190" rel="#L190">190</span>
<span id="L191" rel="#L191">191</span>
<span id="L192" rel="#L192">192</span>
<span id="L193" rel="#L193">193</span>
<span id="L194" rel="#L194">194</span>
<span id="L195" rel="#L195">195</span>
<span id="L196" rel="#L196">196</span>
<span id="L197" rel="#L197">197</span>
<span id="L198" rel="#L198">198</span>
<span id="L199" rel="#L199">199</span>
<span id="L200" rel="#L200">200</span>
<span id="L201" rel="#L201">201</span>
<span id="L202" rel="#L202">202</span>
<span id="L203" rel="#L203">203</span>
<span id="L204" rel="#L204">204</span>
<span id="L205" rel="#L205">205</span>
<span id="L206" rel="#L206">206</span>
<span id="L207" rel="#L207">207</span>
<span id="L208" rel="#L208">208</span>
<span id="L209" rel="#L209">209</span>
<span id="L210" rel="#L210">210</span>
<span id="L211" rel="#L211">211</span>
<span id="L212" rel="#L212">212</span>
<span id="L213" rel="#L213">213</span>
<span id="L214" rel="#L214">214</span>
<span id="L215" rel="#L215">215</span>
<span id="L216" rel="#L216">216</span>
<span id="L217" rel="#L217">217</span>
<span id="L218" rel="#L218">218</span>
<span id="L219" rel="#L219">219</span>
<span id="L220" rel="#L220">220</span>
<span id="L221" rel="#L221">221</span>
<span id="L222" rel="#L222">222</span>
<span id="L223" rel="#L223">223</span>
<span id="L224" rel="#L224">224</span>
<span id="L225" rel="#L225">225</span>
<span id="L226" rel="#L226">226</span>
<span id="L227" rel="#L227">227</span>
<span id="L228" rel="#L228">228</span>
<span id="L229" rel="#L229">229</span>
<span id="L230" rel="#L230">230</span>
<span id="L231" rel="#L231">231</span>
<span id="L232" rel="#L232">232</span>
<span id="L233" rel="#L233">233</span>
<span id="L234" rel="#L234">234</span>
<span id="L235" rel="#L235">235</span>
<span id="L236" rel="#L236">236</span>
<span id="L237" rel="#L237">237</span>
<span id="L238" rel="#L238">238</span>
<span id="L239" rel="#L239">239</span>
<span id="L240" rel="#L240">240</span>
<span id="L241" rel="#L241">241</span>
<span id="L242" rel="#L242">242</span>
<span id="L243" rel="#L243">243</span>
<span id="L244" rel="#L244">244</span>
<span id="L245" rel="#L245">245</span>
<span id="L246" rel="#L246">246</span>
<span id="L247" rel="#L247">247</span>

           </td>
           <td class="blob-line-code"><div class="code-body highlight"><pre><div class='line' id='LC1'><span class="cm">/**</span></div><div class='line' id='LC2'><span class="cm"> * Backbone localStorage Adapter</span></div><div class='line' id='LC3'><span class="cm"> * Version 1.1.7</span></div><div class='line' id='LC4'><span class="cm"> *</span></div><div class='line' id='LC5'><span class="cm"> * https://github.com/jeromegn/Backbone.localStorage</span></div><div class='line' id='LC6'><span class="cm"> */</span></div><div class='line' id='LC7'><span class="p">(</span><span class="kd">function</span> <span class="p">(</span><span class="nx">root</span><span class="p">,</span> <span class="nx">factory</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC8'>&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">exports</span> <span class="o">===</span> <span class="s1">&#39;object&#39;</span> <span class="o">&amp;&amp;</span> <span class="k">typeof</span> <span class="nx">require</span> <span class="o">===</span> <span class="s1">&#39;function&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC9'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">module</span><span class="p">.</span><span class="nx">exports</span> <span class="o">=</span> <span class="nx">factory</span><span class="p">(</span><span class="nx">require</span><span class="p">(</span><span class="s2">&quot;backbone&quot;</span><span class="p">));</span></div><div class='line' id='LC10'>&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">define</span> <span class="o">===</span> <span class="s2">&quot;function&quot;</span> <span class="o">&amp;&amp;</span> <span class="nx">define</span><span class="p">.</span><span class="nx">amd</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC11'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// AMD. Register as an anonymous module.</span></div><div class='line' id='LC12'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">define</span><span class="p">([</span><span class="s2">&quot;backbone&quot;</span><span class="p">],</span> <span class="kd">function</span><span class="p">(</span><span class="nx">Backbone</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC13'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Use global variables if the locals are undefined.</span></div><div class='line' id='LC14'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">factory</span><span class="p">(</span><span class="nx">Backbone</span> <span class="o">||</span> <span class="nx">root</span><span class="p">.</span><span class="nx">Backbone</span><span class="p">);</span></div><div class='line' id='LC15'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC16'>&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC17'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">factory</span><span class="p">(</span><span class="nx">Backbone</span><span class="p">);</span></div><div class='line' id='LC18'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC19'><span class="p">}(</span><span class="k">this</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">Backbone</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC20'><span class="c1">// A simple module to replace `Backbone.sync` with *localStorage*-based</span></div><div class='line' id='LC21'><span class="c1">// persistence. Models are given GUIDS, and saved into a JSON object. Simple</span></div><div class='line' id='LC22'><span class="c1">// as that.</span></div><div class='line' id='LC23'><br/></div><div class='line' id='LC24'><span class="c1">// Hold reference to Underscore.js and Backbone.js in the closure in order</span></div><div class='line' id='LC25'><span class="c1">// to make things work even if they are removed from the global namespace</span></div><div class='line' id='LC26'><br/></div><div class='line' id='LC27'><span class="c1">// Generate four random hex digits.</span></div><div class='line' id='LC28'><span class="kd">function</span> <span class="nx">S4</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC29'>&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="p">(((</span><span class="mi">1</span><span class="o">+</span><span class="nb">Math</span><span class="p">.</span><span class="nx">random</span><span class="p">())</span><span class="o">*</span><span class="mh">0x10000</span><span class="p">)</span><span class="o">|</span><span class="mi">0</span><span class="p">).</span><span class="nx">toString</span><span class="p">(</span><span class="mi">16</span><span class="p">).</span><span class="nx">substring</span><span class="p">(</span><span class="mi">1</span><span class="p">);</span></div><div class='line' id='LC30'><span class="p">};</span></div><div class='line' id='LC31'><br/></div><div class='line' id='LC32'><span class="c1">// Generate a pseudo-GUID by concatenating random hexadecimal.</span></div><div class='line' id='LC33'><span class="kd">function</span> <span class="nx">guid</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC34'>&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="p">(</span><span class="nx">S4</span><span class="p">()</span><span class="o">+</span><span class="nx">S4</span><span class="p">()</span><span class="o">+</span><span class="s2">&quot;-&quot;</span><span class="o">+</span><span class="nx">S4</span><span class="p">()</span><span class="o">+</span><span class="s2">&quot;-&quot;</span><span class="o">+</span><span class="nx">S4</span><span class="p">()</span><span class="o">+</span><span class="s2">&quot;-&quot;</span><span class="o">+</span><span class="nx">S4</span><span class="p">()</span><span class="o">+</span><span class="s2">&quot;-&quot;</span><span class="o">+</span><span class="nx">S4</span><span class="p">()</span><span class="o">+</span><span class="nx">S4</span><span class="p">()</span><span class="o">+</span><span class="nx">S4</span><span class="p">());</span></div><div class='line' id='LC35'><span class="p">};</span></div><div class='line' id='LC36'><br/></div><div class='line' id='LC37'><span class="kd">function</span> <span class="nx">contains</span><span class="p">(</span><span class="nx">array</span><span class="p">,</span> <span class="nx">item</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC38'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="nx">array</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span></div><div class='line' id='LC39'>&nbsp;&nbsp;<span class="k">while</span> <span class="p">(</span><span class="nx">i</span><span class="o">--</span><span class="p">)</span> <span class="k">if</span> <span class="p">(</span><span class="nx">array</span><span class="p">[</span><span class="nx">i</span><span class="p">]</span> <span class="o">===</span> <span class="nx">item</span><span class="p">)</span> <span class="k">return</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC40'>&nbsp;&nbsp;<span class="k">return</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC41'><span class="p">}</span></div><div class='line' id='LC42'><br/></div><div class='line' id='LC43'><span class="kd">function</span> <span class="nx">extend</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="nx">props</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC44'>&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">key</span> <span class="k">in</span> <span class="nx">props</span><span class="p">)</span> <span class="nx">obj</span><span class="p">[</span><span class="nx">key</span><span class="p">]</span> <span class="o">=</span> <span class="nx">props</span><span class="p">[</span><span class="nx">key</span><span class="p">]</span></div><div class='line' id='LC45'>&nbsp;&nbsp;<span class="k">return</span> <span class="nx">obj</span><span class="p">;</span></div><div class='line' id='LC46'><span class="p">}</span></div><div class='line' id='LC47'><br/></div><div class='line' id='LC48'><span class="c1">// Our Store is represented by a single JS object in *localStorage*. Create it</span></div><div class='line' id='LC49'><span class="c1">// with a meaningful name, like the name you&#39;d give a table.</span></div><div class='line' id='LC50'><span class="c1">// window.Store is deprectated, use Backbone.LocalStorage instead</span></div><div class='line' id='LC51'><span class="nx">Backbone</span><span class="p">.</span><span class="nx">LocalStorage</span> <span class="o">=</span> <span class="nb">window</span><span class="p">.</span><span class="nx">Store</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">name</span><span class="p">,</span> <span class="nx">serializer</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC52'>&nbsp;&nbsp;<span class="k">if</span><span class="p">(</span> <span class="o">!</span><span class="k">this</span><span class="p">.</span><span class="nx">localStorage</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC53'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">throw</span> <span class="s2">&quot;Backbone.localStorage: Environment does not support localStorage.&quot;</span></div><div class='line' id='LC54'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC55'>&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">name</span> <span class="o">=</span> <span class="nx">name</span><span class="p">;</span></div><div class='line' id='LC56'>&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">serializer</span> <span class="o">=</span> <span class="nx">serializer</span> <span class="o">||</span> <span class="p">{</span></div><div class='line' id='LC57'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">serialize</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">item</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC58'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">_</span><span class="p">.</span><span class="nx">isObject</span><span class="p">(</span><span class="nx">item</span><span class="p">)</span> <span class="o">?</span> <span class="nx">JSON</span><span class="p">.</span><span class="nx">stringify</span><span class="p">(</span><span class="nx">item</span><span class="p">)</span> <span class="o">:</span> <span class="nx">item</span><span class="p">;</span></div><div class='line' id='LC59'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC60'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// fix for &quot;illegal access&quot; error on Android when JSON.parse is passed null</span></div><div class='line' id='LC61'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">deserialize</span><span class="o">:</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">data</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC62'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">data</span> <span class="o">&amp;&amp;</span> <span class="nx">JSON</span><span class="p">.</span><span class="nx">parse</span><span class="p">(</span><span class="nx">data</span><span class="p">);</span></div><div class='line' id='LC63'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC64'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC65'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">store</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">localStorage</span><span class="p">().</span><span class="nx">getItem</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">name</span><span class="p">);</span></div><div class='line' id='LC66'>&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">records</span> <span class="o">=</span> <span class="p">(</span><span class="nx">store</span> <span class="o">&amp;&amp;</span> <span class="nx">store</span><span class="p">.</span><span class="nx">split</span><span class="p">(</span><span class="s2">&quot;,&quot;</span><span class="p">))</span> <span class="o">||</span> <span class="p">[];</span></div><div class='line' id='LC67'><span class="p">};</span></div><div class='line' id='LC68'><br/></div><div class='line' id='LC69'><span class="nx">extend</span><span class="p">(</span><span class="nx">Backbone</span><span class="p">.</span><span class="nx">LocalStorage</span><span class="p">.</span><span class="nx">prototype</span><span class="p">,</span> <span class="p">{</span></div><div class='line' id='LC70'><br/></div><div class='line' id='LC71'>&nbsp;&nbsp;<span class="c1">// Save the current state of the **Store** to *localStorage*.</span></div><div class='line' id='LC72'>&nbsp;&nbsp;<span class="nx">save</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC73'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">localStorage</span><span class="p">().</span><span class="nx">setItem</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">name</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">records</span><span class="p">.</span><span class="nx">join</span><span class="p">(</span><span class="s2">&quot;,&quot;</span><span class="p">));</span></div><div class='line' id='LC74'>&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC75'><br/></div><div class='line' id='LC76'>&nbsp;&nbsp;<span class="c1">// Add a model, giving it a (hopefully)-unique GUID, if it doesn&#39;t already</span></div><div class='line' id='LC77'>&nbsp;&nbsp;<span class="c1">// have an id of it&#39;s own.</span></div><div class='line' id='LC78'>&nbsp;&nbsp;<span class="nx">create</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">model</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC79'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">model</span><span class="p">.</span><span class="nx">id</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC80'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">model</span><span class="p">.</span><span class="nx">id</span> <span class="o">=</span> <span class="nx">guid</span><span class="p">();</span></div><div class='line' id='LC81'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">model</span><span class="p">.</span><span class="nx">set</span><span class="p">(</span><span class="nx">model</span><span class="p">.</span><span class="nx">idAttribute</span><span class="p">,</span> <span class="nx">model</span><span class="p">.</span><span class="nx">id</span><span class="p">);</span></div><div class='line' id='LC82'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC83'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">localStorage</span><span class="p">().</span><span class="nx">setItem</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">name</span><span class="o">+</span><span class="s2">&quot;-&quot;</span><span class="o">+</span><span class="nx">model</span><span class="p">.</span><span class="nx">id</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">serializer</span><span class="p">.</span><span class="nx">serialize</span><span class="p">(</span><span class="nx">model</span><span class="p">));</span></div><div class='line' id='LC84'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">records</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">model</span><span class="p">.</span><span class="nx">id</span><span class="p">.</span><span class="nx">toString</span><span class="p">());</span></div><div class='line' id='LC85'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">save</span><span class="p">();</span></div><div class='line' id='LC86'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">find</span><span class="p">(</span><span class="nx">model</span><span class="p">)</span> <span class="o">!==</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC87'>&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC88'><br/></div><div class='line' id='LC89'>&nbsp;&nbsp;<span class="c1">// Update a model by replacing its copy in `this.data`.</span></div><div class='line' id='LC90'>&nbsp;&nbsp;<span class="nx">update</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">model</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC91'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">localStorage</span><span class="p">().</span><span class="nx">setItem</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">name</span><span class="o">+</span><span class="s2">&quot;-&quot;</span><span class="o">+</span><span class="nx">model</span><span class="p">.</span><span class="nx">id</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">serializer</span><span class="p">.</span><span class="nx">serialize</span><span class="p">(</span><span class="nx">model</span><span class="p">));</span></div><div class='line' id='LC92'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">modelId</span> <span class="o">=</span> <span class="nx">model</span><span class="p">.</span><span class="nx">id</span><span class="p">.</span><span class="nx">toString</span><span class="p">();</span></div><div class='line' id='LC93'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">contains</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">records</span><span class="p">,</span> <span class="nx">modelId</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC94'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">records</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">modelId</span><span class="p">);</span></div><div class='line' id='LC95'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">save</span><span class="p">();</span></div><div class='line' id='LC96'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC97'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">find</span><span class="p">(</span><span class="nx">model</span><span class="p">)</span> <span class="o">!==</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC98'>&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC99'><br/></div><div class='line' id='LC100'>&nbsp;&nbsp;<span class="c1">// Retrieve a model from `this.data` by id.</span></div><div class='line' id='LC101'>&nbsp;&nbsp;<span class="nx">find</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">model</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC102'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">serializer</span><span class="p">.</span><span class="nx">deserialize</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">localStorage</span><span class="p">().</span><span class="nx">getItem</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">name</span><span class="o">+</span><span class="s2">&quot;-&quot;</span><span class="o">+</span><span class="nx">model</span><span class="p">.</span><span class="nx">id</span><span class="p">));</span></div><div class='line' id='LC103'>&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC104'><br/></div><div class='line' id='LC105'>&nbsp;&nbsp;<span class="c1">// Return the array of all models currently in storage.</span></div><div class='line' id='LC106'>&nbsp;&nbsp;<span class="nx">findAll</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC107'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">result</span> <span class="o">=</span> <span class="p">[];</span></div><div class='line' id='LC108'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">id</span><span class="p">,</span> <span class="nx">data</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="k">this</span><span class="p">.</span><span class="nx">records</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC109'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">id</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">records</span><span class="p">[</span><span class="nx">i</span><span class="p">];</span></div><div class='line' id='LC110'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">data</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">serializer</span><span class="p">.</span><span class="nx">deserialize</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">localStorage</span><span class="p">().</span><span class="nx">getItem</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">name</span><span class="o">+</span><span class="s2">&quot;-&quot;</span><span class="o">+</span><span class="nx">id</span><span class="p">));</span></div><div class='line' id='LC111'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">data</span> <span class="o">!=</span> <span class="kc">null</span><span class="p">)</span> <span class="nx">result</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">data</span><span class="p">);</span></div><div class='line' id='LC112'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC113'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">result</span><span class="p">;</span></div><div class='line' id='LC114'>&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC115'><br/></div><div class='line' id='LC116'>&nbsp;&nbsp;<span class="c1">// Delete a model from `this.data`, returning it.</span></div><div class='line' id='LC117'>&nbsp;&nbsp;<span class="nx">destroy</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">model</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC118'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">model</span><span class="p">.</span><span class="nx">isNew</span><span class="p">())</span></div><div class='line' id='LC119'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="kc">false</span></div><div class='line' id='LC120'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">localStorage</span><span class="p">().</span><span class="nx">removeItem</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">name</span><span class="o">+</span><span class="s2">&quot;-&quot;</span><span class="o">+</span><span class="nx">model</span><span class="p">.</span><span class="nx">id</span><span class="p">);</span></div><div class='line' id='LC121'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">modelId</span> <span class="o">=</span> <span class="nx">model</span><span class="p">.</span><span class="nx">id</span><span class="p">.</span><span class="nx">toString</span><span class="p">();</span></div><div class='line' id='LC122'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">id</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="k">this</span><span class="p">.</span><span class="nx">records</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC123'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">records</span><span class="p">[</span><span class="nx">i</span><span class="p">]</span> <span class="o">===</span> <span class="nx">modelId</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC124'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">records</span><span class="p">.</span><span class="nx">splice</span><span class="p">(</span><span class="nx">i</span><span class="p">,</span> <span class="mi">1</span><span class="p">);</span></div><div class='line' id='LC125'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC126'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC127'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">save</span><span class="p">();</span></div><div class='line' id='LC128'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">model</span><span class="p">;</span></div><div class='line' id='LC129'>&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC130'><br/></div><div class='line' id='LC131'>&nbsp;&nbsp;<span class="nx">localStorage</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC132'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">localStorage</span><span class="p">;</span></div><div class='line' id='LC133'>&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC134'><br/></div><div class='line' id='LC135'>&nbsp;&nbsp;<span class="c1">// Clear localStorage for specific collection.</span></div><div class='line' id='LC136'>&nbsp;&nbsp;<span class="nx">_clear</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC137'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">local</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">localStorage</span><span class="p">(),</span></div><div class='line' id='LC138'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">itemRe</span> <span class="o">=</span> <span class="k">new</span> <span class="nb">RegExp</span><span class="p">(</span><span class="s2">&quot;^&quot;</span> <span class="o">+</span> <span class="k">this</span><span class="p">.</span><span class="nx">name</span> <span class="o">+</span> <span class="s2">&quot;-&quot;</span><span class="p">);</span></div><div class='line' id='LC139'><br/></div><div class='line' id='LC140'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Remove id-tracking item (e.g., &quot;foo&quot;).</span></div><div class='line' id='LC141'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">local</span><span class="p">.</span><span class="nx">removeItem</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">name</span><span class="p">);</span></div><div class='line' id='LC142'><br/></div><div class='line' id='LC143'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Match all data items (e.g., &quot;foo-ID&quot;) and remove.</span></div><div class='line' id='LC144'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">k</span> <span class="k">in</span> <span class="nx">local</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC145'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">itemRe</span><span class="p">.</span><span class="nx">test</span><span class="p">(</span><span class="nx">k</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC146'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">local</span><span class="p">.</span><span class="nx">removeItem</span><span class="p">(</span><span class="nx">k</span><span class="p">);</span></div><div class='line' id='LC147'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC148'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC149'><br/></div><div class='line' id='LC150'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">records</span><span class="p">.</span><span class="nx">length</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC151'>&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC152'><br/></div><div class='line' id='LC153'>&nbsp;&nbsp;<span class="c1">// Size of localStorage.</span></div><div class='line' id='LC154'>&nbsp;&nbsp;<span class="nx">_storageSize</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC155'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">localStorage</span><span class="p">().</span><span class="nx">length</span><span class="p">;</span></div><div class='line' id='LC156'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC157'><br/></div><div class='line' id='LC158'><span class="p">});</span></div><div class='line' id='LC159'><br/></div><div class='line' id='LC160'><span class="c1">// localSync delegate to the model or collection&#39;s</span></div><div class='line' id='LC161'><span class="c1">// *localStorage* property, which should be an instance of `Store`.</span></div><div class='line' id='LC162'><span class="c1">// window.Store.sync and Backbone.localSync is deprecated, use Backbone.LocalStorage.sync instead</span></div><div class='line' id='LC163'><span class="nx">Backbone</span><span class="p">.</span><span class="nx">LocalStorage</span><span class="p">.</span><span class="nx">sync</span> <span class="o">=</span> <span class="nb">window</span><span class="p">.</span><span class="nx">Store</span><span class="p">.</span><span class="nx">sync</span> <span class="o">=</span> <span class="nx">Backbone</span><span class="p">.</span><span class="nx">localSync</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">method</span><span class="p">,</span> <span class="nx">model</span><span class="p">,</span> <span class="nx">options</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC164'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">store</span> <span class="o">=</span> <span class="nx">model</span><span class="p">.</span><span class="nx">localStorage</span> <span class="o">||</span> <span class="nx">model</span><span class="p">.</span><span class="nx">collection</span><span class="p">.</span><span class="nx">localStorage</span><span class="p">;</span></div><div class='line' id='LC165'><br/></div><div class='line' id='LC166'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">resp</span><span class="p">,</span> <span class="nx">errorMessage</span><span class="p">;</span></div><div class='line' id='LC167'>&nbsp;&nbsp;<span class="c1">//If $ is having Deferred - use it.</span></div><div class='line' id='LC168'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">syncDfd</span> <span class="o">=</span> <span class="nx">Backbone</span><span class="p">.</span><span class="nx">$</span> <span class="o">?</span></div><div class='line' id='LC169'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">(</span><span class="nx">Backbone</span><span class="p">.</span><span class="nx">$</span><span class="p">.</span><span class="nx">Deferred</span> <span class="o">&amp;&amp;</span> <span class="nx">Backbone</span><span class="p">.</span><span class="nx">$</span><span class="p">.</span><span class="nx">Deferred</span><span class="p">())</span> <span class="o">:</span></div><div class='line' id='LC170'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">(</span><span class="nx">Backbone</span><span class="p">.</span><span class="nx">Deferred</span> <span class="o">&amp;&amp;</span> <span class="nx">Backbone</span><span class="p">.</span><span class="nx">Deferred</span><span class="p">());</span></div><div class='line' id='LC171'><br/></div><div class='line' id='LC172'>&nbsp;&nbsp;<span class="k">try</span> <span class="p">{</span></div><div class='line' id='LC173'><br/></div><div class='line' id='LC174'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">switch</span> <span class="p">(</span><span class="nx">method</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC175'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">case</span> <span class="s2">&quot;read&quot;</span><span class="o">:</span></div><div class='line' id='LC176'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">resp</span> <span class="o">=</span> <span class="nx">model</span><span class="p">.</span><span class="nx">id</span> <span class="o">!=</span> <span class="kc">undefined</span> <span class="o">?</span> <span class="nx">store</span><span class="p">.</span><span class="nx">find</span><span class="p">(</span><span class="nx">model</span><span class="p">)</span> <span class="o">:</span> <span class="nx">store</span><span class="p">.</span><span class="nx">findAll</span><span class="p">();</span></div><div class='line' id='LC177'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">break</span><span class="p">;</span></div><div class='line' id='LC178'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">case</span> <span class="s2">&quot;create&quot;</span><span class="o">:</span></div><div class='line' id='LC179'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">resp</span> <span class="o">=</span> <span class="nx">store</span><span class="p">.</span><span class="nx">create</span><span class="p">(</span><span class="nx">model</span><span class="p">);</span></div><div class='line' id='LC180'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">break</span><span class="p">;</span></div><div class='line' id='LC181'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">case</span> <span class="s2">&quot;update&quot;</span><span class="o">:</span></div><div class='line' id='LC182'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">resp</span> <span class="o">=</span> <span class="nx">store</span><span class="p">.</span><span class="nx">update</span><span class="p">(</span><span class="nx">model</span><span class="p">);</span></div><div class='line' id='LC183'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">break</span><span class="p">;</span></div><div class='line' id='LC184'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">case</span> <span class="s2">&quot;delete&quot;</span><span class="o">:</span></div><div class='line' id='LC185'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">resp</span> <span class="o">=</span> <span class="nx">store</span><span class="p">.</span><span class="nx">destroy</span><span class="p">(</span><span class="nx">model</span><span class="p">);</span></div><div class='line' id='LC186'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">break</span><span class="p">;</span></div><div class='line' id='LC187'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC188'><br/></div><div class='line' id='LC189'>&nbsp;&nbsp;<span class="p">}</span> <span class="k">catch</span><span class="p">(</span><span class="nx">error</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC190'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">error</span><span class="p">.</span><span class="nx">code</span> <span class="o">===</span> <span class="mi">22</span> <span class="o">&amp;&amp;</span> <span class="nx">store</span><span class="p">.</span><span class="nx">_storageSize</span><span class="p">()</span> <span class="o">===</span> <span class="mi">0</span><span class="p">)</span></div><div class='line' id='LC191'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">errorMessage</span> <span class="o">=</span> <span class="s2">&quot;Private browsing is unsupported&quot;</span><span class="p">;</span></div><div class='line' id='LC192'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">else</span></div><div class='line' id='LC193'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">errorMessage</span> <span class="o">=</span> <span class="nx">error</span><span class="p">.</span><span class="nx">message</span><span class="p">;</span></div><div class='line' id='LC194'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC195'><br/></div><div class='line' id='LC196'>&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">resp</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC197'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">options</span> <span class="o">&amp;&amp;</span> <span class="nx">options</span><span class="p">.</span><span class="nx">success</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC198'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">Backbone</span><span class="p">.</span><span class="nx">VERSION</span> <span class="o">===</span> <span class="s2">&quot;0.9.10&quot;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC199'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">options</span><span class="p">.</span><span class="nx">success</span><span class="p">(</span><span class="nx">model</span><span class="p">,</span> <span class="nx">resp</span><span class="p">,</span> <span class="nx">options</span><span class="p">);</span></div><div class='line' id='LC200'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC201'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">options</span><span class="p">.</span><span class="nx">success</span><span class="p">(</span><span class="nx">resp</span><span class="p">);</span></div><div class='line' id='LC202'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC203'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC204'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">syncDfd</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC205'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">syncDfd</span><span class="p">.</span><span class="nx">resolve</span><span class="p">(</span><span class="nx">resp</span><span class="p">);</span></div><div class='line' id='LC206'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC207'><br/></div><div class='line' id='LC208'>&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC209'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">errorMessage</span> <span class="o">=</span> <span class="nx">errorMessage</span> <span class="o">?</span> <span class="nx">errorMessage</span></div><div class='line' id='LC210'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="o">:</span> <span class="s2">&quot;Record Not Found&quot;</span><span class="p">;</span></div><div class='line' id='LC211'><br/></div><div class='line' id='LC212'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">options</span> <span class="o">&amp;&amp;</span> <span class="nx">options</span><span class="p">.</span><span class="nx">error</span><span class="p">)</span></div><div class='line' id='LC213'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">Backbone</span><span class="p">.</span><span class="nx">VERSION</span> <span class="o">===</span> <span class="s2">&quot;0.9.10&quot;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC214'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">options</span><span class="p">.</span><span class="nx">error</span><span class="p">(</span><span class="nx">model</span><span class="p">,</span> <span class="nx">errorMessage</span><span class="p">,</span> <span class="nx">options</span><span class="p">);</span></div><div class='line' id='LC215'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC216'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">options</span><span class="p">.</span><span class="nx">error</span><span class="p">(</span><span class="nx">errorMessage</span><span class="p">);</span></div><div class='line' id='LC217'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC218'><br/></div><div class='line' id='LC219'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">syncDfd</span><span class="p">)</span></div><div class='line' id='LC220'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">syncDfd</span><span class="p">.</span><span class="nx">reject</span><span class="p">(</span><span class="nx">errorMessage</span><span class="p">);</span></div><div class='line' id='LC221'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC222'><br/></div><div class='line' id='LC223'>&nbsp;&nbsp;<span class="c1">// add compatibility with $.ajax</span></div><div class='line' id='LC224'>&nbsp;&nbsp;<span class="c1">// always execute callback for success and error</span></div><div class='line' id='LC225'>&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">options</span> <span class="o">&amp;&amp;</span> <span class="nx">options</span><span class="p">.</span><span class="nx">complete</span><span class="p">)</span> <span class="nx">options</span><span class="p">.</span><span class="nx">complete</span><span class="p">(</span><span class="nx">resp</span><span class="p">);</span></div><div class='line' id='LC226'><br/></div><div class='line' id='LC227'>&nbsp;&nbsp;<span class="k">return</span> <span class="nx">syncDfd</span> <span class="o">&amp;&amp;</span> <span class="nx">syncDfd</span><span class="p">.</span><span class="nx">promise</span><span class="p">();</span></div><div class='line' id='LC228'><span class="p">};</span></div><div class='line' id='LC229'><br/></div><div class='line' id='LC230'><span class="nx">Backbone</span><span class="p">.</span><span class="nx">ajaxSync</span> <span class="o">=</span> <span class="nx">Backbone</span><span class="p">.</span><span class="nx">sync</span><span class="p">;</span></div><div class='line' id='LC231'><br/></div><div class='line' id='LC232'><span class="nx">Backbone</span><span class="p">.</span><span class="nx">getSyncMethod</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">model</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC233'>&nbsp;&nbsp;<span class="k">if</span><span class="p">(</span><span class="nx">model</span><span class="p">.</span><span class="nx">localStorage</span> <span class="o">||</span> <span class="p">(</span><span class="nx">model</span><span class="p">.</span><span class="nx">collection</span> <span class="o">&amp;&amp;</span> <span class="nx">model</span><span class="p">.</span><span class="nx">collection</span><span class="p">.</span><span class="nx">localStorage</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC234'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">Backbone</span><span class="p">.</span><span class="nx">localSync</span><span class="p">;</span></div><div class='line' id='LC235'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC236'><br/></div><div class='line' id='LC237'>&nbsp;&nbsp;<span class="k">return</span> <span class="nx">Backbone</span><span class="p">.</span><span class="nx">ajaxSync</span><span class="p">;</span></div><div class='line' id='LC238'><span class="p">};</span></div><div class='line' id='LC239'><br/></div><div class='line' id='LC240'><span class="c1">// Override &#39;Backbone.sync&#39; to default to localSync,</span></div><div class='line' id='LC241'><span class="c1">// the original &#39;Backbone.sync&#39; is still available in &#39;Backbone.ajaxSync&#39;</span></div><div class='line' id='LC242'><span class="nx">Backbone</span><span class="p">.</span><span class="nx">sync</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">method</span><span class="p">,</span> <span class="nx">model</span><span class="p">,</span> <span class="nx">options</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC243'>&nbsp;&nbsp;<span class="k">return</span> <span class="nx">Backbone</span><span class="p">.</span><span class="nx">getSyncMethod</span><span class="p">(</span><span class="nx">model</span><span class="p">).</span><span class="nx">apply</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="p">[</span><span class="nx">method</span><span class="p">,</span> <span class="nx">model</span><span class="p">,</span> <span class="nx">options</span><span class="p">]);</span></div><div class='line' id='LC244'><span class="p">};</span></div><div class='line' id='LC245'><br/></div><div class='line' id='LC246'><span class="k">return</span> <span class="nx">Backbone</span><span class="p">.</span><span class="nx">LocalStorage</span><span class="p">;</span></div><div class='line' id='LC247'><span class="p">}));</span></div></pre></div></td>
         </tr>
       </table>
  </div>

  </div>
</div>

<a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" class="js-jump-to-line" style="display:none">Jump to Line</a>
<div id="jump-to-line" style="display:none">
  <form accept-charset="UTF-8" class="js-jump-to-line-form">
    <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" autofocus>
    <button type="submit" class="button">Go</button>
  </form>
</div>

        </div>

      </div><!-- /.repo-container -->
      <div class="modal-backdrop"></div>
    </div><!-- /.container -->
  </div><!-- /.site -->


    </div><!-- /.wrapper -->

      <div class="container">
  <div class="site-footer">
    <ul class="site-footer-links right">
      <li><a href="https://status.github.com/">Status</a></li>
      <li><a href="http://developer.github.com">API</a></li>
      <li><a href="http://training.github.com">Training</a></li>
      <li><a href="http://shop.github.com">Shop</a></li>
      <li><a href="/blog">Blog</a></li>
      <li><a href="/about">About</a></li>

    </ul>

    <a href="/">
      <span class="mega-octicon octicon-mark-github" title="GitHub"></span>
    </a>

    <ul class="site-footer-links">
      <li>&copy; 2014 <span title="0.05124s from github-fe128-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="/site/terms">Terms</a></li>
        <li><a href="/site/privacy">Privacy</a></li>
        <li><a href="/security">Security</a></li>
        <li><a href="/contact">Contact</a></li>
    </ul>
  </div><!-- /.site-footer -->
</div><!-- /.container -->


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-fullscreen-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="fullscreen-contents js-fullscreen-contents" placeholder="" data-suggester="fullscreen_suggester"></textarea>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped tooltipped-w" aria-label="Exit Zen Mode">
      <span class="mega-octicon octicon-screen-normal"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped tooltipped-w"
      aria-label="Switch themes">
      <span class="octicon octicon-color-mode"></span>
    </a>
  </div>
</div>



    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <a href="#" class="octicon octicon-x close js-ajax-error-dismiss"></a>
      Something went wrong with that request. Please try again.
    </div>


      <script crossorigin="anonymous" src="https://assets-cdn.github.com/assets/frameworks-abd42a425136c7b864dcc59154d5f87c9aae54e3.js" type="text/javascript"></script>
      <script async="async" crossorigin="anonymous" src="https://assets-cdn.github.com/assets/github-89f79637947f64400e73b3edac016795009a2ed4.js" type="text/javascript"></script>
      
      
        <script async src="https://www.google-analytics.com/analytics.js"></script>
  </body>
</html>

