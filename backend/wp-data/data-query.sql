SELECT 
    CASE Type
     WHEN 'P' THEN 'simple'
     WHEN 'PG' THEN 'variable'
     ELSE NULL
    END as Type,
    LTRIM(RTRIM(I.ItemID)) AS SKU,
    LTRIM(RTRIM(I.Name)) AS Name,
    1 as Published,
    LTRIM(RTRIM(CAST(I.LongDescr AS VARCHAR(MAX)))) AS Short_Description,
    LTRIM(RTRIM(CAST(I.Descr AS VARCHAR(MAX)))) AS Description,
    'taxable' as Tax_status,
    P.USD_ListPrice as Regular_Price,
    P.USD_Price as Sale_Price,
    C.categoryID as Categories,
    CONCAT('https://curatedbyjw.com/', Image) as Images
FROM xCTItems I
INNER JOIN xCTItemCategories C
ON I.ItemID = C.ItemID
INNER JOIN xItemGlobalPricing P
ON I.InvtID = P.InvtID
WHERE I.CatalogID = 'JW'
AND I.Type = 'P'
AND I.Active = 1
AND C.categoryID NOT LIKE '%Link'
AND C.categoryID NOT LIKE 'test%';