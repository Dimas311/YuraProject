<%@ page import="java.util.Calendar" %>
<%@ taglib prefix="tiles" uri="http://tiles.apache.org/tags-tiles" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="sec" uri="http://www.springframework.org/security/tags" %>
<footer class="l-footer">
    <!-- isi: start -->
    <c:forEach items="${footers}" var="footer">
        ${footer}
    </c:forEach>
    <!-- isi: end -->
    <nav class="b-footer-nav m-cfix">
        <ul>
            <li><a href="${contextPath}/contact-us.html">Contact us</a></li>
            <li><a href="${contextPath}/site-map.html">Site Map</a></li>
            <li><a href="http://www.biogenidec.com/" rel="external">Biogen Idec</a></li>
            <li><a href="${contextPath}/privacy-policy.html">Privacy policy</a></li>
            <li><a href="${contextPath}/terms-conditions.html">Terms & Conditions of Use</a></li>
            <%--<sec:authorize var="loggedIn" access="isAuthenticated()"/>--%>
            <%--<c:choose>--%>
                <%--<c:when test="${loggedIn}">--%>
                    <%--<li><a href="${contextPath}/unsubscribe.html">Unsubscribe</a></li>--%>
                <%--</c:when>--%>
            <%--</c:choose>--%>
        </ul>
    </nav>
    <p class="b-copyright">
        <a href="http://www.biogenidec.com/" rel="external"><img src="${contextPath}/images/misc/logo-biogen.png"
                                                                 alt="Biogen Idec"/></a>
        &copy;<%=Calendar.getInstance().get(Calendar.YEAR)%> Biogen Idec. All rights reserved.
    </p>
</footer>