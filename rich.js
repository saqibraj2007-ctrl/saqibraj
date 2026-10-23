/* Pink Salt Wall - rich gallery layout. Images: media/psw/<name>.webp (full) and <name>-t.webp (small preview) */
const _p=n=>"media/psw/"+n;
const RICH={
"pink":{
 video:{
  main:{label:"Main brand video",note:"Pink Salt Wall main video yahan lagegi"},
  extra:[{label:"Ad creative"},{label:"E-store product video"},{label:"UGC video"}]
 },
 sections:[
  {title:"Post Designs",sub:"Social media posts — brand, sale and seasonal campaigns",cols:3,ratio:"1/1",
   items:["post-welcome","post-summer-sale","post-explore","post-halloween-1","post-halloween-2","post-halloween-3"]},
  {title:"Sub-brands",sub:"Pink Salt Wall ke teen sub-brands, har ek ke 3 posts + 1 reel",brands:[
    {name:"NutriSalt",url:"https://nutrisalt.us/",host:"nutrisalt.us",items:["nutrisalt-1","nutrisalt-2","nutrisalt-3"]},
    {name:"Saltite",url:"https://saltite.com/",host:"saltite.com",items:["saltite-1","saltite-2","saltite-3"]},
    {name:"Salt Room Builder",url:"https://saltroombuilder.us/",host:"saltroombuilder.us",items:["saltroom-1","saltroom-2","saltroom-3"]}
  ]},
  {title:"Product Photography",sub:"Real product shots, shot and edited in-house",cols:4,ratio:"3/4",
   items:["photo-brick-1","photo-brick-2","photo-bowl-1","photo-bowl-2","photo-bowl-3","photo-bowl-4","photo-massage-1","photo-massage-2","photo-massage-3","photo-massage-4","photo-heart","photo-hook","photo-group"],
   bts:["bts-1","bts-2","bts-3"]},
  {title:"AI Product Photography",sub:"Simple product PNG leke AI se stunning frame banaya",ai:[
    {source:["ai-source-tray-1","ai-source-tray-2"],result:["ai-tray-1","ai-tray-2","ai-tray-3"],caption:"Salt block tray: sirf in 2 PNGs se 3 AI frames"},
    {source:[],result:["ai-lamp-massage"],caption:"Salt bowl lamp with massage stones"}
  ]},
  {title:"Banners & Listing Graphics",sub:"eStore banners, free-shipping creatives",cols:4,ratio:"1/1",
   items:["banner-lamps","banner-free-shipping","banner-shipping-8x8","banner-cooking-block"]},
  {title:"Brochure Mockups",sub:"Print brochure design",cols:4,ratio:"1/1",
   items:["brochure-1","brochure-2","brochure-3","brochure-4"]},
  {title:"YouTube Thumbnails",sub:"Mobile-first thumbnails",cols:2,ratio:"16/9",
   items:["thumb-1","thumb-2","thumb-3","thumb-4"]}
 ]
}};
