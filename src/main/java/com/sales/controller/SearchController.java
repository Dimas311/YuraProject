package com.sales.controller;


import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import java.util.ArrayList;

@Controller
public class SearchController {

    private static final Logger log = Logger.getLogger(SearchController.class);

/*    @Autowired
    ContentProviderService contentProvider;*/

    @RequestMapping(value = "/search.html", method = RequestMethod.GET)
    ModelAndView search() throws Exception {
        ModelAndView modelAndView = new ModelAndView("search");
/*        modelAndView.addObject("searchQuery", "");
        ArrayList<SearchResult> searchResults = new ArrayList<SearchResult>();
        modelAndView.addObject("searchResults", searchResults);
        modelAndView.addObject("found", 0);*/
        return modelAndView;
    }

    @RequestMapping(value = "/search.html", method = RequestMethod.POST)
    ModelAndView search(@RequestParam("searchQuery") String searchQuery) {
        ModelAndView modelAndView = new ModelAndView("search");
/*        modelAndView.addObject("searchQuery", searchQuery);
        SearchResultDTO searchResultDTO = null;
        try {
            searchResultDTO = contentProvider.searchContents(searchQuery, 0l, 50);
        } catch (ContentProviderException e) {
            log.error(e);
            modelAndView.addObject("error", "CSD module exception");
            return modelAndView;
        }

        if (searchResultDTO.getResultData() == null || searchResultDTO.getResultData().size() == 0) {
            ModelAndView errorSearchModel = new ModelAndView("search-error");
            errorSearchModel.addObject("searchQuery", searchQuery);
            return errorSearchModel;
        }

        ArrayList<SearchResult> searchResults = new ArrayList<SearchResult>();

        for (ResourceMetaDataDTO metaDataDTO : searchResultDTO.getResultData()) {
            SearchResult searchResult = new SearchResult();
            searchResult.setTitle(metaDataDTO.getAttributes().get("pageTitle").toString());
            searchResult.setPath(metaDataDTO.getAttributes().get("path").toString());
            searchResult.setDescription(metaDataDTO.getAttributes().get("metaDescription").toString());
            searchResults.add(searchResult);
        }

        modelAndView.addObject("searchResults", searchResults);
        modelAndView.addObject("found", searchResultDTO.getTotal());*/
        return modelAndView;
    }

}
