Request BODY:
curl 'https://medium.com/_/graphql' \
  -H 'accept: */*' \
  -H 'accept-language: en-US,en;q=0.9,ar;q=0.8' \
  -H 'apollographql-client-name: lite' \
  -H 'apollographql-client-version: main-20260626-214034-c95a5b9d75' \
  -H 'content-type: application/json' \     
  -b 'sz=1475; pr=1.25; tz=-180; xsrf=qJ8_cEJ3_RahxjKl; g_state={"i_l":1,"i_ll":1782489592134,"i_b":"XviD3NlKLDz0sRcKsZFXKrb2f4tBUPbbqn4Xkes4iA0","i_e":{"enable_itp_optimization":24},"i_et":1782489592134,"i_p":1782497024650}; nonce=2PxyILjh; rid=DLN9qe16/RAGINBr/u6RyJaVkoz2Z46laLSBNk85sb4eAfGwySre1Lm+/wBr9Io6+PwoA44uxpVBoj1m64xETqN7v1eY516aLTrT+Vmp+OzA64txaXFPYpNLpgjXRKng; uid=d089f5e525f4; sid=1:llql+HRBUO8Ue2cnMoXSKi7YYXJf1p6ZxId94p6Ze4+OseatdHKEyLL04r+zwyLm; _cfuvid=wBJlh2thL5OYwjjO5AcwmkDUA_VaiLc.0rcT0bR.qls-1782563838.509673-1.0.1.1-DO1ZCKIrb7T2957F3XJFv6KJIHlel48T83SHDtAJT_Y; cf_clearance=L6nws114sJQAyn5YaNQIqOo.FZuc5XtAj.eJEWmeuaI-1782563845-1.2.1.1-U9QDeGG8xlDHrOwVCqF9obZt0f8v2xSxJwiNwM_62_b2faibKpVi31Fn.goRcaGQbZj0XY8p_kqBQ6D5u8v4VDL0eku4lL1lruLE0U373FGPxRmUcvBczihZPAQbD52psHvXe1uh6DIhjoFxWPtaU0mXJL8jLV.LQnXUYUKUsNBr4sMhFGYuP14yiAyavAUjkYh9KZi3QX5.j68wLS3fRk9Hg6Y.22jftH52B9KrsyTXn5Sn4qhxGx7MFZgrpOxCDpJf1.AcOsPCNLY0CFtaFzgGKy3D6OsJfseK9jPfU.BC7tF4oJhqwka2EA5EExpybiMO8tN1IoL_7KGkLkMKzQ; _dd_s=rum=0&expire=1782565083159' \
  -H 'graphql-operation: WebInlineRecommendedFeedQuery' \
  -H 'medium-frontend-app: lite/main-20260626-214034-c95a5b9d75' \
  -H 'medium-frontend-path: /' \
  -H 'medium-frontend-route: homepage' \
  -H 'origin: https://medium.com' \
  -H 'priority: u=1, i' \
  -H 'referer: https://medium.com/' \
  -H 'sec-ch-ua: "Microsoft Edge";v="149", "Chromium";v="149", "Not)A;Brand";v="24"' \
  -H 'sec-ch-ua-mobile: ?0' \
  -H 'sec-ch-ua-platform: "Windows"' \
  -H 'sec-fetch-dest: empty' \
  -H 'sec-fetch-mode: cors' \
  -H 'sec-fetch-site: same-origin' \
  -H 'user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.0.0 Safari/537.36 Edg/149.0.0.0' \
  --data-raw '[{"operationName":"WebInlineRecommendedFeedQuery","variables":{"forceRank":false,"paging":{"to":"5","limit":5,"source":"0c02586e-00ef-4db1-b72d-fbe9abdfc7b3"}},"query":"query WebInlineRecommendedFeedQuery($paging: PagingOptions, $forceRank: Boolean) {\n  webRecommendedFeed(paging: $paging, forceRank: $forceRank) {\n    items {\n      ...InlineFeed_homeFeedItem\n      reasonString\n      __typename\n    }\n    pagingInfo {\n      next {\n        limit\n        to\n        source\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n}\n\nfragment userUrl_user on User {\n  __typename\n  id\n  customDomainState {\n    live {\n      domain\n      __typename\n    }\n    __typename\n  }\n  hasSubdomain\n  username\n}\n\nfragment PostPreviewReason_user on User {\n  name\n  ...userUrl_user\n  __typename\n  id\n}\n\nfragment PostPreviewReason_tag on Tag {\n  normalizedTagSlug\n  id\n  displayTitle\n  __typename\n}\n\nfragment PostPreviewReason_postProviderExplanation on PostProviderExplanation {\n  reason\n  interactedUsers {\n    ...PostPreviewReason_user\n    __typename\n  }\n  tagObject {\n    ...PostPreviewReason_tag\n    __typename\n    id\n  }\n  __typename\n}\n\nfragment StreamPostPreview_postProviderExplanation on PostProviderExplanation {\n  ...PostPreviewReason_postProviderExplanation\n  __typename\n}\n\nfragment useExplicitSignal_post on Post {\n  id\n  viewerEdge {\n    id\n    explicitSignalState\n    __typename\n  }\n  __typename\n}\n\nfragment useMutingActions_user on User {\n  id\n  name\n  viewerEdge {\n    id\n    isMuting\n    __typename\n  }\n  __typename\n}\n\nfragment MuteEntityButton_user on User {\n  id\n  name\n  ...useMutingActions_user\n  __typename\n}\n\nfragment ExplicitSignalModal_user on User {\n  id\n  viewerEdge {\n    id\n    isMuting\n    __typename\n  }\n  ...MuteEntityButton_user\n  __typename\n}\n\nfragment useMutingActions_collection on Collection {\n  id\n  name\n  viewerEdge {\n    id\n    isMuting\n    __typename\n  }\n  __typename\n}\n\nfragment MuteEntityButton_collection on Collection {\n  id\n  name\n  ...useMutingActions_collection\n  __typename\n}\n\nfragment ExplicitSignalModal_collection on Collection {\n  id\n  viewerEdge {\n    id\n    isMuting\n    __typename\n  }\n  ...MuteEntityButton_collection\n  __typename\n}\n\nfragment useMutingActions_tag on Tag {\n  id\n  normalizedTagSlug\n  displayTitle\n  viewerEdge {\n    id\n    isMuting\n    __typename\n  }\n  __typename\n}\n\nfragment MuteEntityButton_tag on Tag {\n  id\n  displayTitle\n  ...useMutingActions_tag\n  __typename\n}\n\nfragment ExplicitSignalModal_tag on Tag {\n  id\n  viewerEdge {\n    id\n    isMuting\n    __typename\n  }\n  ...MuteEntityButton_tag\n  __typename\n}\n\nfragment ExplicitSignalModal_post on Post {\n  id\n  creator {\n    ...ExplicitSignalModal_user\n    __typename\n    id\n  }\n  collection {\n    ...ExplicitSignalModal_collection\n    __typename\n    id\n  }\n  tags {\n    ...ExplicitSignalModal_tag\n    __typename\n  }\n  __typename\n}\n\nfragment ExplicitSignalContext_post on Post {\n  ...useExplicitSignal_post\n  ...ExplicitSignalModal_post\n  __typename\n  id\n}\n\nfragment StreamPostPreviewImage_imageMetadata on ImageMetadata {\n  id\n  focusPercentX\n  focusPercentY\n  alt\n  __typename\n}\n\nfragment StreamPostPreviewImage_post on Post {\n  title\n  previewImage {\n    ...StreamPostPreviewImage_imageMetadata\n    __typename\n    id\n  }\n  __typename\n  id\n}\n\nfragment SusiModal_post on Post {\n  id\n  creator {\n    id\n    __typename\n  }\n  __typename\n}\n\nfragment SusiClickable_post on Post {\n  id\n  mediumUrl\n  ...SusiModal_post\n  __typename\n}\n\nfragment AddToCatalogBase_post on Post {\n  id\n  isPublished\n  ...SusiClickable_post\n  __typename\n}\n\nfragment AddToCatalogBookmarkButton_post on Post {\n  ...AddToCatalogBase_post\n  __typename\n  id\n}\n\nfragment BookmarkButton_post on Post {\n  visibility\n  ...SusiClickable_post\n  ...AddToCatalogBookmarkButton_post\n  __typename\n  id\n}\n\nfragment MutePopoverOptions_user on User {\n  id\n  viewerEdge {\n    id\n    isMuting\n    __typename\n  }\n  ...useMutingActions_user\n  __typename\n}\n\nfragment SignInOptions_user on User {\n  id\n  name\n  imageId\n  __typename\n}\n\nfragment SignUpOptions_user on User {\n  id\n  name\n  imageId\n  __typename\n}\n\nfragment SusiModal_user on User {\n  ...SignInOptions_user\n  ...SignUpOptions_user\n  __typename\n  id\n}\n\nfragment useNewsletterV3Subscription_newsletterV3 on NewsletterV3 {\n  id\n  type\n  slug\n  name\n  collection {\n    slug\n    __typename\n    id\n  }\n  user {\n    id\n    name\n    username\n    newsletterV3 {\n      id\n      __typename\n    }\n    __typename\n  }\n  __typename\n}\n\nfragment useNewsletterV3Subscription_user on User {\n  id\n  username\n  newsletterV3 {\n    ...useNewsletterV3Subscription_newsletterV3\n    __typename\n    id\n  }\n  __typename\n}\n\nfragment useAuthorFollowSubscribeButton_user on User {\n  id\n  name\n  ...useNewsletterV3Subscription_user\n  __typename\n}\n\nfragment useAuthorFollowSubscribeButton_newsletterV3 on NewsletterV3 {\n  id\n  name\n  ...useNewsletterV3Subscription_newsletterV3\n  __typename\n}\n\nfragment AuthorFollowSubscribeButton_user on User {\n  id\n  name\n  imageId\n  ...SusiModal_user\n  ...useAuthorFollowSubscribeButton_user\n  newsletterV3 {\n    id\n    ...useAuthorFollowSubscribeButton_newsletterV3\n    __typename\n  }\n  __typename\n}\n\nfragment FollowMenuOptions_user on User {\n  id\n  ...AuthorFollowSubscribeButton_user\n  __typename\n}\n\nfragment MutePopoverOptions_collection on Collection {\n  id\n  viewerEdge {\n    id\n    isEditor\n    isMuting\n    __typename\n  }\n  ...useMutingActions_collection\n  __typename\n}\n\nfragment SignInOptions_collection on Collection {\n  id\n  name\n  __typename\n}\n\nfragment SignUpOptions_collection on Collection {\n  id\n  name\n  __typename\n}\n\nfragment SusiModal_collection on Collection {\n  name\n  ...SignInOptions_collection\n  ...SignUpOptions_collection\n  __typename\n  id\n}\n\nfragment PublicationFollowButton_collection on Collection {\n  id\n  slug\n  name\n  ...SusiModal_collection\n  __typename\n}\n\nfragment FollowMenuOptions_collection on Collection {\n  id\n  ...PublicationFollowButton_collection\n  __typename\n}\n\nfragment MuteTagModal_tag on Tag {\n  id\n  ...MuteEntityButton_tag\n  __typename\n}\n\nfragment MutePopoverOptions_tag on Tag {\n  viewerEdge {\n    id\n    isMuting\n    __typename\n  }\n  ...MuteTagModal_tag\n  __typename\n  id\n}\n\nfragment MultiVoteCount_post on Post {\n  id\n  __typename\n}\n\nfragment ClapMutation_post on Post {\n  __typename\n  id\n  clapCount\n  ...MultiVoteCount_post\n}\n\nfragment OverflowMenuItemUndoClaps_post on Post {\n  id\n  clapCount\n  ...ClapMutation_post\n  __typename\n}\n\nfragment ExplicitSignalMenuOptions_post on Post {\n  ...ExplicitSignalModal_post\n  __typename\n  id\n}\n\nfragment OverflowMenu_post on Post {\n  id\n  creator {\n    id\n    ...MutePopoverOptions_user\n    ...FollowMenuOptions_user\n    __typename\n  }\n  collection {\n    id\n    ...MutePopoverOptions_collection\n    ...FollowMenuOptions_collection\n    __typename\n  }\n  tags {\n    ...MutePopoverOptions_tag\n    __typename\n  }\n  ...OverflowMenuItemUndoClaps_post\n  ...AddToCatalogBase_post\n  ...ExplicitSignalMenuOptions_post\n  __typename\n}\n\nfragment OverflowMenuButton_post on Post {\n  id\n  visibility\n  ...OverflowMenu_post\n  __typename\n}\n\nfragment ShowLessButton_post on Post {\n  ...useExplicitSignal_post\n  ...ExplicitSignalModal_post\n  __typename\n  id\n}\n\nfragment PostPreviewFooterMenu_post on Post {\n  id\n  ...BookmarkButton_post\n  ...OverflowMenuButton_post\n  ...ShowLessButton_post\n  __typename\n}\n\nfragment Star_post on Post {\n  id\n  __typename\n}\n\nfragment PostPreviewFooterMeta_post on Post {\n  id\n  isLocked\n  postResponses {\n    count\n    __typename\n  }\n  ...Star_post\n  __typename\n}\n\nfragment PostPreviewFooter_post on Post {\n  ...PostPreviewFooterMenu_post\n  ...PostPreviewFooterMeta_post\n  __typename\n  id\n}\n\nfragment UserAvatar_user on User {\n  id\n  imageId\n  name\n  username\n  __typename\n}\n\nfragment UserAvatarLinkContainer_user on User {\n  ...userUrl_user\n  __typename\n  id\n}\n\nfragment UserAvatarWithLink_user on User {\n  ...UserAvatar_user\n  ...UserAvatarLinkContainer_user\n  __typename\n  id\n}\n\nfragment isUserVerifiedBookAuthor_user on User {\n  verifications {\n    isBookAuthor\n    __typename\n  }\n  __typename\n  id\n}\n\nfragment UserLink_user on User {\n  ...userUrl_user\n  __typename\n  id\n}\n\nfragment UserName_user on User {\n  id\n  name\n  ...isUserVerifiedBookAuthor_user\n  ...UserLink_user\n  __typename\n}\n\nfragment PostPreviewByLineAuthor_user on User {\n  ...UserAvatarWithLink_user\n  ...UserName_user\n  __typename\n  id\n}\n\nfragment collectionUrl_collection on Collection {\n  id\n  domain\n  slug\n  __typename\n}\n\nfragment CollectionAvatar_collection on Collection {\n  name\n  avatar {\n    id\n    __typename\n  }\n  ...collectionUrl_collection\n  __typename\n  id\n}\n\nfragment EntityPresentationRankedModulePublishingTracker_entity on RankedModulePublishingEntity {\n  __typename\n  ... on Collection {\n    id\n    __typename\n  }\n  ... on User {\n    id\n    __typename\n  }\n}\n\nfragment CollectionTooltip_collection on Collection {\n  id\n  name\n  slug\n  description\n  subscriberCount\n  customStyleSheet {\n    header {\n      backgroundImage {\n        id\n        __typename\n      }\n      __typename\n    }\n    __typename\n    id\n  }\n  ...CollectionAvatar_collection\n  ...PublicationFollowButton_collection\n  ...EntityPresentationRankedModulePublishingTracker_entity\n  __typename\n}\n\nfragment CollectionLinkWithPopover_collection on Collection {\n  name\n  ...collectionUrl_collection\n  ...CollectionTooltip_collection\n  __typename\n  id\n}\n\nfragment PostPreviewByLineCollection_collection on Collection {\n  ...CollectionAvatar_collection\n  ...CollectionTooltip_collection\n  ...CollectionLinkWithPopover_collection\n  __typename\n  id\n}\n\nfragment usePostPublishedAt_post on Post {\n  firstPublishedAt\n  latestPublishedAt\n  pinnedAt\n  __typename\n  id\n}\n\nfragment PostPreviewByLine_post on Post {\n  creator {\n    ...PostPreviewByLineAuthor_user\n    __typename\n    id\n  }\n  collection {\n    ...PostPreviewByLineCollection_collection\n    __typename\n    id\n  }\n  ...usePostPublishedAt_post\n  __typename\n  id\n}\n\nfragment PostPreviewInformation_post on Post {\n  readingTime\n  isLocked\n  ...Star_post\n  ...usePostPublishedAt_post\n  __typename\n  id\n}\n\nfragment StreamPostPreviewContent_post on Post {\n  id\n  title\n  previewImage {\n    id\n    __typename\n  }\n  extendedPreviewContent {\n    subtitle\n    __typename\n  }\n  ...StreamPostPreviewImage_post\n  ...PostPreviewFooter_post\n  ...PostPreviewByLine_post\n  ...PostPreviewInformation_post\n  __typename\n}\n\nfragment PostScrollTracker_post on Post {\n  id\n  collection {\n    id\n    __typename\n  }\n  sequence {\n    sequenceId\n    __typename\n  }\n  __typename\n}\n\nfragment usePostUrl_post on Post {\n  id\n  creator {\n    ...userUrl_user\n    __typename\n    id\n  }\n  collection {\n    id\n    domain\n    slug\n    __typename\n  }\n  isSeries\n  mediumUrl\n  sequence {\n    slug\n    __typename\n  }\n  uniqueSlug\n  __typename\n}\n\nfragment PostPreviewContainer_post on Post {\n  id\n  title\n  extendedPreviewContent {\n    isFullContent\n    subtitle\n    __typename\n  }\n  visibility\n  pinnedAt\n  ...PostScrollTracker_post\n  ...usePostUrl_post\n  __typename\n}\n\nfragment StreamPostPreview_post on Post {\n  id\n  ...ExplicitSignalContext_post\n  ...StreamPostPreviewContent_post\n  ...PostPreviewContainer_post\n  __typename\n}\n\nfragment InlineFeed_homeFeedItem on HomeFeedItem {\n  feedId\n  moduleSourceEncoding\n  reason\n  postProviderExplanation {\n    ...StreamPostPreview_postProviderExplanation\n    __typename\n  }\n  post {\n    ...StreamPostPreview_post\n    __typename\n    id\n  }\n  __typename\n}\n"}]'



  example response: 
  [
    {
        "data": {
            "webRecommendedFeed": {
                "items": [
                    {
                        "feedId": "0c02586e-00ef-4db1-b72d-fbe9abdfc7b3",
                        "moduleSourceEncoding": 15,
                        "reason": 98,
                        "postProviderExplanation": {
                            "reason": "DEEP_RETRIEVAL_MODEL",
                            "interactedUsers": [],
                            "tagObject": null,
                            "__typename": "PostProviderExplanation"
                        },
                        "post": {
                            "id": "486d2fd906f3",
                            "viewerEdge": {
                                "id": "postId:486d2fd906f3-viewerId:d089f5e525f4",
                                "explicitSignalState": null,
                                "__typename": "PostViewerEdge"
                            },
                            "__typename": "Post",
                            "creator": {
                                "id": "da79ae9bc6af",
                                "viewerEdge": {
                                    "id": "userId:da79ae9bc6af-viewerId:d089f5e525f4",
                                    "isMuting": false,
                                    "__typename": "UserViewerEdge"
                                },
                                "name": "Noor Mohamad",
                                "__typename": "User",
                                "imageId": "1*ATOKQVlDEfglj0KTPwcCEA.png",
                                "username": "reactjsbd",
                                "newsletterV3": {
                                    "id": "f2909f51bb1e",
                                    "type": "NEWSLETTER_TYPE_AUTHOR",
                                    "slug": "da79ae9bc6af",
                                    "name": "da79ae9bc6af",
                                    "collection": null,
                                    "user": {
                                        "id": "da79ae9bc6af",
                                        "name": "Noor Mohamad",
                                        "username": "reactjsbd",
                                        "newsletterV3": {
                                            "id": "f2909f51bb1e",
                                            "__typename": "NewsletterV3"
                                        },
                                        "__typename": "User"
                                    },
                                    "__typename": "NewsletterV3"
                                },
                                "customDomainState": null,
                                "hasSubdomain": false,
                                "verifications": {
                                    "isBookAuthor": false,
                                    "__typename": "VerifiedInfo"
                                }
                            },
                            "collection": {
                                "id": "d1baaa8417a4",
                                "viewerEdge": {
                                    "id": "collectionId:d1baaa8417a4-viewerId:d089f5e525f4",
                                    "isMuting": false,
                                    "__typename": "CollectionViewerEdge",
                                    "isEditor": false
                                },
                                "name": "Stackademic",
                                "__typename": "Collection",
                                "slug": "stackademic",
                                "avatar": {
                                    "id": "1*U-kjsW7IZUobnoy1gAp1UQ.png",
                                    "__typename": "ImageMetadata"
                                },
                                "domain": "blog.stackademic.com",
                                "description": "Stackademic is a learning hub for programmers, devs, coders, and engineers. Our goal is to democratize free coding education for the world.",
                                "subscriberCount": 85433,
                                "customStyleSheet": null
                            },
                            "tags": [
                                {
                                    "id": "claude",
                                    "viewerEdge": {
                                        "id": "tagSlug:claude-viewerId:d089f5e525f4",
                                        "isMuting": false,
                                        "__typename": "TagViewerEdge"
                                    },
                                    "displayTitle": "Claude",
                                    "normalizedTagSlug": "claude",
                                    "__typename": "Tag"
                                },
                                {
                                    "id": "ai",
                                    "viewerEdge": {
                                        "id": "tagSlug:ai-viewerId:d089f5e525f4",
                                        "isMuting": false,
                                        "__typename": "TagViewerEdge"
                                    },
                                    "displayTitle": "AI",
                                    "normalizedTagSlug": "ai",
                                    "__typename": "Tag"
                                },
                                {
                                    "id": "skills",
                                    "viewerEdge": {
                                        "id": "tagSlug:skills-viewerId:d089f5e525f4",
                                        "isMuting": false,
                                        "__typename": "TagViewerEdge"
                                    },
                                    "displayTitle": "Skills",
                                    "normalizedTagSlug": "skills",
                                    "__typename": "Tag"
                                },
                                {
                                    "id": "ai-skills",
                                    "viewerEdge": {
                                        "id": "tagSlug:ai-skills-viewerId:d089f5e525f4",
                                        "isMuting": false,
                                        "__typename": "TagViewerEdge"
                                    },
                                    "displayTitle": "Ai Skills",
                                    "normalizedTagSlug": "ai-skills",
                                    "__typename": "Tag"
                                },
                                {
                                    "id": "claude-code",
                                    "viewerEdge": {
                                        "id": "tagSlug:claude-code-viewerId:d089f5e525f4",
                                        "isMuting": false,
                                        "__typename": "TagViewerEdge"
                                    },
                                    "displayTitle": "Claude Code",
                                    "normalizedTagSlug": "claude-code",
                                    "__typename": "Tag"
                                }
                            ],
                            "title": "The Best 12 Claude Skills Setup — A Complete 2026 Guide to Configuring Claude Like a Pro",
                            "previewImage": {
                                "id": "1*ZiSgqmJUytDQgQwWqsy0DA.png",
                                "__typename": "ImageMetadata",
                                "focusPercentX": null,
                                "focusPercentY": null,
                                "alt": null
                            },
                            "extendedPreviewContent": {
                                "subtitle": "What Claude Skills are, how to install them in under 60 seconds, how to build your own, and the 12-skill stack that genuinely changes how…",
                                "__typename": "PreviewContent",
                                "isFullContent": false
                            },
                            "visibility": "LOCKED",
                            "mediumUrl": "https://blog.stackademic.com/the-best-12-claude-skills-setup-a-complete-2026-guide-to-configuring-claude-like-a-pro-486d2fd906f3",
                            "isPublished": true,
                            "clapCount": 1113,
                            "isLocked": true,
                            "postResponses": {
                                "count": 11,
                                "__typename": "PostResponses"
                            },
                            "firstPublishedAt": 1778646661603,
                            "latestPublishedAt": 1780402578655,
                            "pinnedAt": 0,
                            "readingTime": 6.184905660377359,
                            "sequence": null,
                            "isSeries": false,
                            "uniqueSlug": "the-best-12-claude-skills-setup-a-complete-2026-guide-to-configuring-claude-like-a-pro-486d2fd906f3"
                        },
                        "__typename": "HomeFeedItem",
                        "reasonString": "Selected for you"
                    },
                    {
                        "feedId": "0c02586e-00ef-4db1-b72d-fbe9abdfc7b3",
                        "moduleSourceEncoding": 15,
                        "reason": 109,
                        "postProviderExplanation": {
                            "reason": null,
                            "interactedUsers": [],
                            "tagObject": null,
                            "__typename": "PostProviderExplanation"
                        },
                        "post": {
                            "id": "034685e17707",
                            "viewerEdge": {
                                "id": "postId:034685e17707-viewerId:d089f5e525f4",
                                "explicitSignalState": null,
                                "__typename": "PostViewerEdge"
                            },
                            "__typename": "Post",
                            "creator": {
                                "id": "82189e623746",
                                "viewerEdge": {
                                    "id": "userId:82189e623746-viewerId:d089f5e525f4",
                                    "isMuting": false,
                                    "__typename": "UserViewerEdge"
                                },
                                "name": "Marina Wyss",
                                "__typename": "User",
                                "imageId": "1*y9j0Ua_Z8wini7cpXmVPFw.jpeg",
                                "username": "gratitudedriven",
                                "newsletterV3": {
                                    "id": "211e74748341",
                                    "type": "NEWSLETTER_TYPE_AUTHOR",
                                    "slug": "82189e623746",
                                    "name": "82189e623746",
                                    "collection": null,
                                    "user": {
                                        "id": "82189e623746",
                                        "name": "Marina Wyss",
                                        "username": "gratitudedriven",
                                        "newsletterV3": {
                                            "id": "211e74748341",
                                            "__typename": "NewsletterV3"
                                        },
                                        "__typename": "User"
                                    },
                                    "__typename": "NewsletterV3"
                                },
                                "customDomainState": null,
                                "hasSubdomain": false,
                                "verifications": {
                                    "isBookAuthor": false,
                                    "__typename": "VerifiedInfo"
                                }
                            },
                            "collection": {
                                "id": "8993e01dcfd3",
                                "viewerEdge": {
                                    "id": "collectionId:8993e01dcfd3-viewerId:d089f5e525f4",
                                    "isMuting": false,
                                    "__typename": "CollectionViewerEdge",
                                    "isEditor": false
                                },
                                "name": "Data Science Collective",
                                "__typename": "Collection",
                                "slug": "data-science-collective",
                                "avatar": {
                                    "id": "1*0nV0Q-FBHj94Kggq00pG2Q.jpeg",
                                    "__typename": "ImageMetadata"
                                },
                                "domain": null,
                                "description": "Advice, insights, and ideas from the Medium data science community",
                                "subscriberCount": 933373,
                                "customStyleSheet": null
                            },
                            "tags": [
                                {
                                    "id": "software-engineering",
                                    "viewerEdge": {
                                        "id": "tagSlug:software-engineering-viewerId:d089f5e525f4",
                                        "isMuting": false,
                                        "__typename": "TagViewerEdge"
                                    },
                                    "displayTitle": "Software Engineering",
                                    "normalizedTagSlug": "software-engineering",
                                    "__typename": "Tag"
                                },
                                {
                                    "id": "coding",
                                    "viewerEdge": {
                                        "id": "tagSlug:coding-viewerId:d089f5e525f4",
                                        "isMuting": false,
                                        "__typename": "TagViewerEdge"
                                    },
                                    "displayTitle": "Coding",
                                    "normalizedTagSlug": "coding",
                                    "__typename": "Tag"
                                },
                                {
                                    "id": "python",
                                    "viewerEdge": {
                                        "id": "tagSlug:python-viewerId:d089f5e525f4",
                                        "isMuting": false,
                                        "__typename": "TagViewerEdge"
                                    },
                                    "displayTitle": "Python",
                                    "normalizedTagSlug": "python",
                                    "__typename": "Tag"
                                },
                                {
                                    "id": "programming",
                                    "viewerEdge": {
                                        "id": "tagSlug:programming-viewerId:d089f5e525f4",
                                        "isMuting": false,
                                        "__typename": "TagViewerEdge"
                                    },
                                    "displayTitle": "Programming",
                                    "normalizedTagSlug": "programming",
                                    "__typename": "Tag"
                                },
                                {
                                    "id": "computer-science",
                                    "viewerEdge": {
                                        "id": "tagSlug:computer-science-viewerId:d089f5e525f4",
                                        "isMuting": false,
                                        "__typename": "TagViewerEdge"
                                    },
                                    "displayTitle": "Computer Science",
                                    "normalizedTagSlug": "computer-science",
                                    "__typename": "Tag"
                                }
                            ],
                            "title": "Should You Still Learn to Code in 2026?",
                            "previewImage": {
                                "id": "1*gasaRNc3_X8K96F58zKyvw.jpeg",
                                "__typename": "ImageMetadata",
                                "focusPercentX": null,
                                "focusPercentY": null,
                                "alt": null
                            },
                            "extendedPreviewContent": {
                                "subtitle": "The answer isn’t as obvious as I used to believe.",
                                "__typename": "PreviewContent",
                                "isFullContent": false
                            },
                            "visibility": "LOCKED",
                            "mediumUrl": "https://medium.com/data-science-collective/should-you-still-learn-to-code-in-2026-034685e17707",
                            "isPublished": true,
                            "clapCount": 4675,
                            "isLocked": true,
                            "postResponses": {
                                "count": 240,
                                "__typename": "PostResponses"
                            },
                            "firstPublishedAt": 1771807162998,
                            "latestPublishedAt": 1775142455421,
                            "pinnedAt": 0,
                            "readingTime": 8.150943396226415,
                            "sequence": null,
                            "isSeries": false,
                            "uniqueSlug": "should-you-still-learn-to-code-in-2026-034685e17707"
                        },
                        "__typename": "HomeFeedItem",
                        "reasonString": null
                    },
                    {
                        "feedId": "0c02586e-00ef-4db1-b72d-fbe9abdfc7b3",
                        "moduleSourceEncoding": 15,
                        "reason": 102,
                        "postProviderExplanation": {
                            "reason": "DEEP_RETRIEVAL_MODEL_TQP",
                            "interactedUsers": [],
                            "tagObject": null,
                            "__typename": "PostProviderExplanation"
                        },
                        "post": {
                            "id": "e84f22fca9fa",
                            "viewerEdge": {
                                "id": "postId:e84f22fca9fa-viewerId:d089f5e525f4",
                                "explicitSignalState": null,
                                "__typename": "PostViewerEdge"
                            },
                            "__typename": "Post",
                            "creator": {
                                "id": "b2b4c0725476",
                                "viewerEdge": {
                                    "id": "userId:b2b4c0725476-viewerId:d089f5e525f4",
                                    "isMuting": false,
                                    "__typename": "UserViewerEdge"
                                },
                                "name": "Alina Kovtun✨",
                                "__typename": "User",
                                "imageId": "1*Ddgp0_7ZDX4yDLhl_wbF4w@2x.jpeg",
                                "username": "akovtun",
                                "newsletterV3": {
                                    "id": "c321293b4583",
                                    "type": "NEWSLETTER_TYPE_AUTHOR",
                                    "slug": "b2b4c0725476",
                                    "name": "b2b4c0725476",
                                    "collection": null,
                                    "user": {
                                        "id": "b2b4c0725476",
                                        "name": "Alina Kovtun✨",
                                        "username": "akovtun",
                                        "newsletterV3": {
                                            "id": "c321293b4583",
                                            "__typename": "NewsletterV3"
                                        },
                                        "__typename": "User"
                                    },
                                    "__typename": "NewsletterV3"
                                },
                                "customDomainState": {
                                    "live": null,
                                    "__typename": "CustomDomainState"
                                },
                                "hasSubdomain": false,
                                "verifications": {
                                    "isBookAuthor": false,
                                    "__typename": "VerifiedInfo"
                                }
                            },
                            "collection": {
                                "id": "e3421a76bb3f",
                                "viewerEdge": {
                                    "id": "collectionId:e3421a76bb3f-viewerId:d089f5e525f4",
                                    "isMuting": false,
                                    "__typename": "CollectionViewerEdge",
                                    "isEditor": false
                                },
                                "name": "Women in Technology",
                                "__typename": "Collection",
                                "slug": "womenintechnology",
                                "avatar": {
                                    "id": "1*kd0DvPkLdn59Emtg_rnsqg.png",
                                    "__typename": "ImageMetadata"
                                },
                                "domain": null,
                                "description": "Women in Tech is a publication to highlight women in STEM, their accomplishments, career lessons, and stories. We feature the unique voices of our writers. Their opinions are their own and don’t necessarily reflect our editorial stance.",
                                "subscriberCount": 9872,
                                "customStyleSheet": null
                            },
                            "tags": [
                                {
                                    "id": "programming",
                                    "viewerEdge": {
                                        "id": "tagSlug:programming-viewerId:d089f5e525f4",
                                        "isMuting": false,
                                        "__typename": "TagViewerEdge"
                                    },
                                    "displayTitle": "Programming",
                                    "normalizedTagSlug": "programming",
                                    "__typename": "Tag"
                                },
                                {
                                    "id": "design-patterns",
                                    "viewerEdge": {
                                        "id": "tagSlug:design-patterns-viewerId:d089f5e525f4",
                                        "isMuting": false,
                                        "__typename": "TagViewerEdge"
                                    },
                                    "displayTitle": "Design Patterns",
                                    "normalizedTagSlug": "design-patterns",
                                    "__typename": "Tag"
                                },
                                {
                                    "id": "software-development",
                                    "viewerEdge": {
                                        "id": "tagSlug:software-development-viewerId:d089f5e525f4",
                                        "isMuting": false,
                                        "__typename": "TagViewerEdge"
                                    },
                                    "displayTitle": "Software Development",
                                    "normalizedTagSlug": "software-development",
                                    "__typename": "Tag"
                                },
                                {
                                    "id": "software-engineering",
                                    "viewerEdge": {
                                        "id": "tagSlug:software-engineering-viewerId:d089f5e525f4",
                                        "isMuting": false,
                                        "__typename": "TagViewerEdge"
                                    },
                                    "displayTitle": "Software Engineering",
                                    "normalizedTagSlug": "software-engineering",
                                    "__typename": "Tag"
                                },
                                {
                                    "id": "web-development",
                                    "viewerEdge": {
                                        "id": "tagSlug:web-development-viewerId:d089f5e525f4",
                                        "isMuting": false,
                                        "__typename": "TagViewerEdge"
                                    },
                                    "displayTitle": "Web Development",
                                    "normalizedTagSlug": "web-development",
                                    "__typename": "Tag"
                                }
                            ],
                            "title": "Stop Memorizing Design Patterns: Use This Decision Tree Instead",
                            "previewImage": {
                                "id": "1*xfboC-sVIT2hzWkgQZT_7w.png",
                                "__typename": "ImageMetadata",
                                "focusPercentX": null,
                                "focusPercentY": null,
                                "alt": null
                            },
                            "extendedPreviewContent": {
                                "subtitle": "Choose design patterns based on pain points: apply the right pattern with minimal over-engineering in any OO language.",
                                "__typename": "PreviewContent",
                                "isFullContent": false
                            },
                            "visibility": "LOCKED",
                            "mediumUrl": "https://medium.com/womenintechnology/stop-memorizing-design-patterns-use-this-decision-tree-instead-e84f22fca9fa",
                            "isPublished": true,
                            "clapCount": 8708,
                            "isLocked": true,
                            "postResponses": {
                                "count": 90,
                                "__typename": "PostResponses"
                            },
                            "firstPublishedAt": 1769688414937,
                            "latestPublishedAt": 1776178592809,
                            "pinnedAt": 0,
                            "readingTime": 9.487735849056603,
                            "sequence": null,
                            "isSeries": false,
                            "uniqueSlug": "stop-memorizing-design-patterns-use-this-decision-tree-instead-e84f22fca9fa"
                        },
                        "__typename": "HomeFeedItem",
                        "reasonString": "Selected for you"
                    },
                    {
                        "feedId": "0c02586e-00ef-4db1-b72d-fbe9abdfc7b3",
                        "moduleSourceEncoding": 15,
                        "reason": 99,
                        "postProviderExplanation": {
                            "reason": "CURATED_IN_TAG",
                            "interactedUsers": [],
                            "tagObject": {
                                "normalizedTagSlug": "technology",
                                "id": "technology",
                                "displayTitle": "Technology",
                                "__typename": "Tag"
                            },
                            "__typename": "PostProviderExplanation"
                        },
                        "post": {
                            "id": "44a54310ae67",
                            "viewerEdge": {
                                "id": "postId:44a54310ae67-viewerId:d089f5e525f4",
                                "explicitSignalState": null,
                                "__typename": "PostViewerEdge"
                            },
                            "__typename": "Post",
                            "creator": {
                                "id": "78a5e6dfd745",
                                "viewerEdge": {
                                    "id": "userId:78a5e6dfd745-viewerId:d089f5e525f4",
                                    "isMuting": false,
                                    "__typename": "UserViewerEdge"
                                },
                                "name": "Adi Insights and Innovations",
                                "__typename": "User",
                                "imageId": "1*uLOunonqp41p5T6q_pB_Kw.jpeg",
                                "username": "adiinsightsinnovations",
                                "newsletterV3": {
                                    "id": "87aa9e6916e8",
                                    "type": "NEWSLETTER_TYPE_AUTHOR",
                                    "slug": "78a5e6dfd745",
                                    "name": "78a5e6dfd745",
                                    "collection": null,
                                    "user": {
                                        "id": "78a5e6dfd745",
                                        "name": "Adi Insights and Innovations",
                                        "username": "adiinsightsinnovations",
                                        "newsletterV3": {
                                            "id": "87aa9e6916e8",
                                            "__typename": "NewsletterV3"
                                        },
                                        "__typename": "User"
                                    },
                                    "__typename": "NewsletterV3"
                                },
                                "customDomainState": {
                                    "live": {
                                        "domain": "adiinsightsinnovations.medium.com",
                                        "__typename": "CustomDomain"
                                    },
                                    "__typename": "CustomDomainState"
                                },
                                "hasSubdomain": true,
                                "verifications": {
                                    "isBookAuthor": false,
                                    "__typename": "VerifiedInfo"
                                }
                            },
                            "collection": {
                                "id": "84ac01765c52",
                                "viewerEdge": {
                                    "id": "collectionId:84ac01765c52-viewerId:d089f5e525f4",
                                    "isMuting": false,
                                    "__typename": "CollectionViewerEdge",
                                    "isEditor": false
                                },
                                "name": "Write A Catalyst",
                                "__typename": "Collection",
                                "slug": "write-a-catalyst",
                                "avatar": {
                                    "id": "1*KCHN5TM3Ga2PqZHA4hNbaw.png",
                                    "__typename": "ImageMetadata"
                                },
                                "domain": null,
                                "description": "Write A Catalyst and Build it into Existence.",
                                "subscriberCount": 208696,
                                "customStyleSheet": null
                            },
                            "tags": [
                                {
                                    "id": "anthropic",
                                    "viewerEdge": {
                                        "id": "tagSlug:anthropic-viewerId:d089f5e525f4",
                                        "isMuting": false,
                                        "__typename": "TagViewerEdge"
                                    },
                                    "displayTitle": "Anthropic",
                                    "normalizedTagSlug": "anthropics",
                                    "__typename": "Tag"
                                },
                                {
                                    "id": "claude",
                                    "viewerEdge": {
                                        "id": "tagSlug:claude-viewerId:d089f5e525f4",
                                        "isMuting": false,
                                        "__typename": "TagViewerEdge"
                                    },
                                    "displayTitle": "Claude",
                                    "normalizedTagSlug": "claude",
                                    "__typename": "Tag"
                                },
                                {
                                    "id": "llm",
                                    "viewerEdge": {
                                        "id": "tagSlug:llm-viewerId:d089f5e525f4",
                                        "isMuting": false,
                                        "__typename": "TagViewerEdge"
                                    },
                                    "displayTitle": "LLM",
                                    "normalizedTagSlug": "llm",
                                    "__typename": "Tag"
                                },
                                {
                                    "id": "ai",
                                    "viewerEdge": {
                                        "id": "tagSlug:ai-viewerId:d089f5e525f4",
                                        "isMuting": false,
                                        "__typename": "TagViewerEdge"
                                    },
                                    "displayTitle": "AI",
                                    "normalizedTagSlug": "ai",
                                    "__typename": "Tag"
                                },
                                {
                                    "id": "claude-max-plan",
                                    "viewerEdge": {
                                        "id": "tagSlug:claude-max-plan-viewerId:d089f5e525f4",
                                        "isMuting": false,
                                        "__typename": "TagViewerEdge"
                                    },
                                    "displayTitle": "Claude Max Plan",
                                    "normalizedTagSlug": "claude-max-plan",
                                    "__typename": "Tag"
                                }
                            ],
                            "title": "Anthropic Just Lost the Argument It’s Been Hiding Behind for 3 Years",
                            "previewImage": {
                                "id": "1*syOeE2hDoa_KdbgQc7srmg.png",
                                "__typename": "ImageMetadata",
                                "focusPercentX": null,
                                "focusPercentY": null,
                                "alt": null
                            },
                            "extendedPreviewContent": {
                                "subtitle": "A class action said what power users have been screaming for months: if you cap it, you sold a cap.",
                                "__typename": "PreviewContent",
                                "isFullContent": false
                            },
                            "visibility": "LOCKED",
                            "mediumUrl": "https://medium.com/write-a-catalyst/anthropic-just-lost-the-argument-its-been-hiding-behind-for-3-years-44a54310ae67",
                            "isPublished": true,
                            "clapCount": 708,
                            "isLocked": true,
                            "postResponses": {
                                "count": 17,
                                "__typename": "PostResponses"
                            },
                            "firstPublishedAt": 1781783039000,
                            "latestPublishedAt": 1781783039000,
                            "pinnedAt": 0,
                            "readingTime": 5.961320754716981,
                            "sequence": null,
                            "isSeries": false,
                            "uniqueSlug": "anthropic-just-lost-the-argument-its-been-hiding-behind-for-3-years-44a54310ae67"
                        },
                        "__typename": "HomeFeedItem",
                        "reasonString": "Because you follow Technology"
                    },
                    {
                        "feedId": "0c02586e-00ef-4db1-b72d-fbe9abdfc7b3",
                        "moduleSourceEncoding": 15,
                        "reason": 98,
                        "postProviderExplanation": {
                            "reason": "DEEP_RETRIEVAL_MODEL",
                            "interactedUsers": [],
                            "tagObject": null,
                            "__typename": "PostProviderExplanation"
                        },
                        "post": {
                            "id": "ef383eeb16f4",
                            "viewerEdge": {
                                "id": "postId:ef383eeb16f4-viewerId:d089f5e525f4",
                                "explicitSignalState": null,
                                "__typename": "PostViewerEdge"
                            },
                            "__typename": "Post",
                            "creator": {
                                "id": "c21539019182",
                                "viewerEdge": {
                                    "id": "userId:c21539019182-viewerId:d089f5e525f4",
                                    "isMuting": false,
                                    "__typename": "UserViewerEdge"
                                },
                                "name": "Pranit naik",
                                "__typename": "User",
                                "imageId": "1*sdaLQX5ylQcyRuDJXLliMQ.jpeg",
                                "username": "pranithnaikpranit",
                                "newsletterV3": {
                                    "id": "ec2087b519e1",
                                    "type": "NEWSLETTER_TYPE_AUTHOR",
                                    "slug": "c21539019182",
                                    "name": "c21539019182",
                                    "collection": null,
                                    "user": {
                                        "id": "c21539019182",
                                        "name": "Pranit naik",
                                        "username": "pranithnaikpranit",
                                        "newsletterV3": {
                                            "id": "ec2087b519e1",
                                            "__typename": "NewsletterV3"
                                        },
                                        "__typename": "User"
                                    },
                                    "__typename": "NewsletterV3"
                                },
                                "customDomainState": null,
                                "hasSubdomain": false,
                                "verifications": {
                                    "isBookAuthor": false,
                                    "__typename": "VerifiedInfo"
                                }
                            },
                            "collection": {
                                "id": "9a48e80a2b34",
                                "viewerEdge": {
                                    "id": "collectionId:9a48e80a2b34-viewerId:d089f5e525f4",
                                    "isMuting": false,
                                    "__typename": "CollectionViewerEdge",
                                    "isEditor": false
                                },
                                "name": "No Time",
                                "__typename": "Collection",
                                "slug": "no-time",
                                "avatar": {
                                    "id": "1*-s0apT5ZWj5xVWPrhOIHHQ.png",
                                    "__typename": "ImageMetadata"
                                },
                                "domain": null,
                                "description": "Share through stories.",
                                "subscriberCount": 11454,
                                "customStyleSheet": null
                            },
                            "tags": [
                                {
                                    "id": "ai",
                                    "viewerEdge": {
                                        "id": "tagSlug:ai-viewerId:d089f5e525f4",
                                        "isMuting": false,
                                        "__typename": "TagViewerEdge"
                                    },
                                    "displayTitle": "AI",
                                    "normalizedTagSlug": "ai",
                                    "__typename": "Tag"
                                },
                                {
                                    "id": "claude",
                                    "viewerEdge": {
                                        "id": "tagSlug:claude-viewerId:d089f5e525f4",
                                        "isMuting": false,
                                        "__typename": "TagViewerEdge"
                                    },
                                    "displayTitle": "Claude",
                                    "normalizedTagSlug": "claude",
                                    "__typename": "Tag"
                                },
                                {
                                    "id": "chatgpt",
                                    "viewerEdge": {
                                        "id": "tagSlug:chatgpt-viewerId:d089f5e525f4",
                                        "isMuting": false,
                                        "__typename": "TagViewerEdge"
                                    },
                                    "displayTitle": "ChatGPT",
                                    "normalizedTagSlug": "chatgpt",
                                    "__typename": "Tag"
                                },
                                {
                                    "id": "generative-ai-tools",
                                    "viewerEdge": {
                                        "id": "tagSlug:generative-ai-tools-viewerId:d089f5e525f4",
                                        "isMuting": false,
                                        "__typename": "TagViewerEdge"
                                    },
                                    "displayTitle": "Generative Ai Tools",
                                    "normalizedTagSlug": "generative-ai-tools",
                                    "__typename": "Tag"
                                },
                                {
                                    "id": "technology",
                                    "viewerEdge": {
                                        "id": "tagSlug:technology-viewerId:d089f5e525f4",
                                        "isMuting": false,
                                        "__typename": "TagViewerEdge"
                                    },
                                    "displayTitle": "Technology",
                                    "normalizedTagSlug": "technology",
                                    "__typename": "Tag"
                                }
                            ],
                            "title": "8 Crazy Things Claude AI Can Do (That ChatGPT Can’t)",
                            "previewImage": {
                                "id": "1*z_2i7m63JolPp5wTTurUIQ.png",
                                "__typename": "ImageMetadata",
                                "focusPercentX": null,
                                "focusPercentY": null,
                                "alt": null
                            },
                            "extendedPreviewContent": {
                                "subtitle": "ChatGPT users, take notes",
                                "__typename": "PreviewContent",
                                "isFullContent": false
                            },
                            "visibility": "LOCKED",
                            "mediumUrl": "https://medium.com/no-time/8-crazy-things-claude-ai-can-do-that-chatgpt-cant-ef383eeb16f4",
                            "isPublished": true,
                            "clapCount": 7027,
                            "isLocked": true,
                            "postResponses": {
                                "count": 213,
                                "__typename": "PostResponses"
                            },
                            "firstPublishedAt": 1776496432943,
                            "latestPublishedAt": 1776496432943,
                            "pinnedAt": 0,
                            "readingTime": 5.943396226415095,
                            "sequence": null,
                            "isSeries": false,
                            "uniqueSlug": "8-crazy-things-claude-ai-can-do-that-chatgpt-cant-ef383eeb16f4"
                        },
                        "__typename": "HomeFeedItem",
                        "reasonString": "Selected for you"
                    }
                ],
                "pagingInfo": {
                    "next": {
                        "limit": 5,
                        "to": "10",
                        "source": "0c02586e-00ef-4db1-b72d-fbe9abdfc7b3",
                        "__typename": "PageParams"
                    },
                    "__typename": "Paging"
                },
                "__typename": "HomeFeedResult"
            }
        }
    }
]