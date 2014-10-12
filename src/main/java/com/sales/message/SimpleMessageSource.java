package com.sales.message;

import org.springframework.context.i18n.LocaleContextHolder;
import org.springframework.context.support.ReloadableResourceBundleMessageSource;

import java.util.Locale;

/**
 * @author Alexey Zelenovsky (VRP Cloud)
 * @date: 09.12.2013 2:47 PM
 */
public class SimpleMessageSource extends ReloadableResourceBundleMessageSource implements Messenger {
    private Locale locale = LocaleContextHolder.getLocale();

    public String getMessage(String code, Object[] args){
        return getMessageInternal(code, args, locale);
    }

    public String getMessage(String code){
        return getMessageInternal(code, null, locale);
    }
}
