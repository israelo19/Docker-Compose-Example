FROM***REMOVED***node:current-alpine3.15
#***REMOVED***Set***REMOVED***the***REMOVED***working***REMOVED***directory***REMOVED***to***REMOVED***/api
WORKDIR***REMOVED***/www

#***REMOVED***copy***REMOVED***package.json***REMOVED***into***REMOVED***the***REMOVED***container***REMOVED***at***REMOVED***/api
COPY***REMOVED***package*.json***REMOVED***/www/

#***REMOVED***install***REMOVED***dependencies
RUN***REMOVED***npm***REMOVED***install***REMOVED***--force

#***REMOVED***Copy***REMOVED***the***REMOVED***current***REMOVED***directory***REMOVED***contents***REMOVED***into***REMOVED***the***REMOVED***container***REMOVED***at***REMOVED***/api
COPY***REMOVED***.***REMOVED***/www/

#***REMOVED***Make***REMOVED***port***REMOVED***80***REMOVED***available***REMOVED***to***REMOVED***the***REMOVED***world***REMOVED***outside***REMOVED***this***REMOVED***container
EXPOSE***REMOVED***3000

#***REMOVED***Run***REMOVED***the***REMOVED***app***REMOVED***when***REMOVED***the***REMOVED***container***REMOVED***launches
CMD***REMOVED***["npm",***REMOVED***"start"]
