

const chalk = require('chalk');
const rpc = require("discordrpcgenerator");
const config = require(".././config.json")

module.exports = async(client) => {
  const small = await rpc.getRpcImage(config.applicationid, config.smallimgname);
  
  rpc.getRpcImage(config.applicationid, config.imagename)
  .then(large => {
    let presence = new rpc.Rpc()
    .setName(config.name)
    .setUrl('https://www.twitch.tv/adityacodez')
    .setType(config.type)
    .setApplicationId(config.applicationid)
    .setAssetsLargeImage(large.id)

.setAssetsSmallImage(small.id)   
      .setAssetsLargeText(large.name)
    .setState(config.state)
    .setDetails(config.details)
    .setStartTimestamp(config.time || Date.now())
    console.log(presence.toDiscord())
    client.user.setStatus("dnd");
    client.user.setPresence(presence.toDiscord()).catch(err=>{return console.error(err)});
  })
  console.log(chalk.hex("#ff0000")("Succesfully enabled rpc"))
           }
//Fixed-Modified by SaikiDesu (Mr.Aik3ro)
//Credits Aditya Codez
