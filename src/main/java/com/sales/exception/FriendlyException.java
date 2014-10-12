package com.sales.exception;

/**
 * @author Alexey Zelenovsky (VRP Cloud)
 * @date: 09.12.2013 3:30 PM
 */
public class FriendlyException extends Exception {
    private String friendlyMessage;

    public FriendlyException(Exception cause) {
        super(cause);
    }

    public FriendlyException(String friendlyMessage) {
        super(friendlyMessage);
        this.friendlyMessage = friendlyMessage;
    }

    public FriendlyException(String message, String friendlyMessage) {
        super(message);
        this.friendlyMessage = friendlyMessage;
    }

    public String getFriendlyMessage() {
        return friendlyMessage;
    }
}
