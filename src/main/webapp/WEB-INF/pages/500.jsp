<%@ page isErrorPage="true" import="java.io.*"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<h1 class="m-spaced">Internal Server Error</h1>
<p>The system has encountered an unknown error.</p>
<p>Our technical staff has been alerted and is diligently working to resolve the issue. We regret any inconvenience.</p>
<p class="m-extra-spaced">Please try again later.</p>

<div style="display:none;">
    <c:out value="${pageContext.exception.cause}"/>
    <c:out value="${pageContext.exception.message}"/>
    <c:forEach items="${pageContext.exception.stackTrace}" var="element">
        <c:out value="${element}"/>
    </c:forEach>
</div>
