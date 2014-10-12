<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="sec" uri="http://www.springframework.org/security/tags" %>
<div class="m-cfix">
    <div class="b-logo"><a href="${contextPath}/home.html"><img src="${contextPath}/images/misc/logo.png" alt="Alprolix"/></a></div>
    <div class="b-top-bar">
        <nav class="b-first-bar">
            <ul>
                <li><a href="http://www.sales.com" rel="external">Patient Site</a></li>
                <li><a href="${contextPath}/pdfs/prescribing-information.pdf" target="_blank">Prescribing Information</a></li>
                <li><a href="${contextPath}/important-safety-information.html">Important Safety Information</a></li>
                <li class="m-share m-icon"><a href="javascript:void(0);">Share</a></li>
                <li class="m-print m-icon"><a href="javascript:window.print();">Print</a></li>
                <li class="m-font m-icon"><a href="javascript:void(0);">Font</a></li>
            </ul>
        </nav>
        <nav class="b-second-bar">
            <ul>
                <li class="m-contact-btn"><a href="${contextPath}/contact-rep.html">Contact my representative</a></li>
                <li><a href="http://www.eloctatepro.com" rel="external">Explore our other HEMOPHILIA product</a></li>
                <sec:authorize var="loggedIn" access="isAuthenticated()" />
                <c:choose>
                    <c:when test="${loggedIn}">
                        <li class="m-logged">
                            <a href="javascript:void(0);">Welcome  <sec:authentication property="principal.viewUserName"/></a>
                            <div class="b-flyout">
                                <div class="b-arrow"></div>
                                <ul>
                                    <li><a href="${contextPath}/profile.html">My Profile</a></li>
                                    <li><a href="${contextPath}/j_spring_security_logout">Not You? Log out</a></li>
                                </ul>
                            </div>
                        </li>
                    </c:when>
                    <c:otherwise>
                        <li><a href="${contextPath}/login.html">Log In</a></li>
                        <li><a href="${contextPath}/enroll.html">Enroll</a></li>
                    </c:otherwise>
                </c:choose>
            </ul>
        </nav>
        <p class="b-copy">This site is intended for US healthcare professionals only</p>
    </div>
</div>