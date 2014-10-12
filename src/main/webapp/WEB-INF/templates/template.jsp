<%@ page import="org.springframework.util.ClassUtils" %>
<%@ page import="org.springframework.web.servlet.view.tiles3.TilesConfigurer" %>
<%@ page import="org.apache.tiles.evaluator.AttributeEvaluator" %>
<!DOCTYPE html>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="tiles" uri="http://tiles.apache.org/tags-tiles" %>
<%@ taglib prefix="sec" uri="http://www.springframework.org/security/tags" %>
<c:set var="contextPath" value="" scope="request"/>
<!--[if IE 7]><html class="ie ie7" lang="en"><![endif]-->
<!--[if IE 8]><html class="ie ie8" lang="en"><![endif]-->
<!--[if IE 9]><html class="ie ie9" lang="en"><![endif]-->
<!--[if (gt IE 9)|!(IE)]><!--><html lang="en"><!--<![endif]-->
    <head>
        <meta charset="utf-8"/>
        <meta name="SKYPE_TOOLBAR" content="SKYPE_TOOLBAR_PARSER_COMPATIBLE" />
        <meta name="viewport" content="width=1024"/>
        <title><tiles:insertAttribute name="title" /></title>

        <%--<link rel="shortcut icon" type="image/x-icon" href="${contextPath}/favicon.ico"/>--%>
        <link rel="stylesheet" type="text/css" href="${contextPath}/css/main.css" media="all"/>

        <script type="text/javascript" src="${contextPath}/scripts/init.js"></script>

    </head>
    <body>

        <div class="b-overlay"></div>


        <div class="h-base">
            <!-- HEADER:START -->
            <header class="l-header">
                <tiles:insertAttribute name="header" />
                <tiles:insertAttribute name="navigation" />
            </header>
            <!-- HEADER: END -->

            <!-- CONTENT: START -->
            <section class="l-content">
                <tiles:insertAttribute name="content" />
            </section>
            <!-- CONTENT: END -->

            <!-- FOOTER: STRAT -->
                <tiles:insertAttribute name="footer" />
            <!-- FOOTER: END -->
        </div>

    </body>
</html>