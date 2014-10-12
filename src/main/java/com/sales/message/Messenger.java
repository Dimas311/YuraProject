package com.sales.message;

import org.springframework.context.MessageSource;
import org.springframework.context.MessageSourceResolvable;
import org.springframework.context.NoSuchMessageException;

import java.util.Locale;

/**
 * @author Alexey Zelenovsky (VRP Cloud)
 * @date: 09.12.2013 2:45 PM
 */
public interface Messenger extends MessageSource {
    String getMessage(String code);
    String getMessage(String code, Object[] args);
}
