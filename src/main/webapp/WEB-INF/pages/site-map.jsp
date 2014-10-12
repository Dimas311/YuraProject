<h1 class="m-spaced">Site Map</h1>
<%@taglib prefix="hcp" uri="http://biogenidec.hemophilia.com/tags/content" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<div class="b-site-map">
    <hcp:menu content="${navigationModel.navTree}" rootPath="${rootPath}" depth="1" collMaxCount="4" >
        <hcp:template name="top_level-wrapper-template">
            %top_level_items%
        </hcp:template>
        <hcp:template name="ul-template">
            <div class="b-site-map">
                <div class="m-cfix">
                    %items%
                </div>
            </div>
        </hcp:template>
        <hcp:template name="li-template">
            <div class="%extra-classes%">
                <ul>
                    <li class="b-section"><a href="%href%">%title%</a></li>
                    %subitems%
                </ul>
            </div>
        </hcp:template>
        <hcp:template name="sub-li-template">
            <li><a href="%href%">%title%</a></li>
        </hcp:template>
        <hcp:template name="first-li-class">
            b-col m1
        </hcp:template>
        <hcp:template name="middle-li-class">
            b-col m2
        </hcp:template>
        <hcp:template name="last-li-class">
            b-col m4
        </hcp:template>
    </hcp:menu>
</div>
