const Alexa = require('ask-sdk-core');
const i18n = require('i18next');

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=  BEGIN GENERIC TEXT HANDLING =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=


const IdeologyHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest' && handlerInput.requestEnvelope.request.intent.name === 'Ideology';
    },
    handle(handlerInput) {
        return handlerInput.responseBuilder.speak('Each power belongs to one of three ideologies: Democracy, Fascism, or Communism. A power’s ideology never changes during the game')
         .withShouldEndSession(false)          .withSimpleCard(`Ideology`,`Each power belongs to one of three ideologies: Democracy, Fascism, or Communism. A power’s ideology never changes during the game`)         .getResponse();    },};

const DemocraticPowersHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest' && handlerInput.requestEnvelope.request.intent.name === 'DemocraticPowers';
    },
    handle(handlerInput) {
        return handlerInput.responseBuilder.speak('The Democratic powers are France (blue), the United Kingdom (khaki), and the United States (green).')
         .withShouldEndSession(false)          .withSimpleCard(`DemocraticPowers`,`The Democratic powers are France (blue), the United Kingdom (khaki), and the United States (green).`)         .getResponse();    },};

const FascistPowersHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest' && handlerInput.requestEnvelope.request.intent.name === 'FascistPowers';
    },
    handle(handlerInput) {
        return handlerInput.responseBuilder.speak('The Fascist powers are Germany (gray), Italy (yellow), and Japan (purple).')
         .withShouldEndSession(false)          .withSimpleCard(`FascistPowers`,`The Fascist powers are Germany (gray), Italy (yellow), and Japan (purple).`)         .getResponse();    },};

const CommunistPowerHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest' && handlerInput.requestEnvelope.request.intent.name === 'CommunistPower';
    },
    handle(handlerInput) {
        return handlerInput.responseBuilder.speak('The sole Communist power is the Soviet Union (red)')
         .withShouldEndSession(false)          .withSimpleCard(`CommunistPower`,`The sole Communist power is the Soviet Union (red)`)         .getResponse();    },};

const NegotiationsHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest' && handlerInput.requestEnvelope.request.intent.name === 'Negotiations';
    },
    handle(handlerInput) {
        return handlerInput.responseBuilder.speak('Players may freely negotiate at the table at any time, so long as the ﬂow of play is not unduly interfered with. However, any deals made are non-binding, and cannot change the game state directly (i.e., no trading or lending of resources, units, control of areas, etc.)')
         .withShouldEndSession(false)          .withSimpleCard(`Negotiations`,`Players may freely negotiate at the table at any time, so long as the ﬂow of play is not unduly interfered with. However, any deals made are non-binding, and cannot change the game state directly (i.e., no trading or lending of resources, units, control of areas, etc.)`)         .getResponse();    },};

const EndingGameHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest' && handlerInput.requestEnvelope.request.intent.name === 'EndingGame';
    },
    handle(handlerInput) {
        return handlerInput.responseBuilder.speak('The game ends immediately when one or more of the following conditions apply: All powers in one ideology have surrendered (5.5.4), One ideology has caused the surrender of two powers (i.e., has two Surrender markers on the political display), or War status is Global War and no powers are belligerent (5.6.3).')
         .withShouldEndSession(false)          .withSimpleCard(`EndingGame`,`The game ends immediately when one or more of the following conditions apply: All powers in one ideology have surrendered (5.5.4), One ideology has caused the surrender of two powers (i.e., has two Surrender markers on the political display), or War status is Global War and no powers are belligerent (5.6.3).`)         .getResponse();    },};

const WinningTheGameHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest' && handlerInput.requestEnvelope.request.intent.name === 'WinningTheGame';
    },
    handle(handlerInput) {
        return handlerInput.responseBuilder.speak('At the end of the game, total the victory points of all powers in each ideology; the ideology with the highest total wins. This can be tracked during the game with the ideology victory point markers. If one or more ideologies are tied for the highest total, the Communists win if they are one of the tied ideologies; otherwise, the Fascists win.')
         .withShouldEndSession(false)          .withSimpleCard(`WinningTheGame`,`At the end of the game, total the victory points of all powers in each ideology; the ideology with the highest total wins. This can be tracked during the game with the ideology victory point markers. If one or more ideologies are tied for the highest total, the Communists win if they are one of the tied ideologies; otherwise, the Fascists win.`)         .getResponse();    },};

const MapsHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest' && handlerInput.requestEnvelope.request.intent.name === 'Maps';
    },
    handle(handlerInput) {
        return handlerInput.responseBuilder.speak('Cataclysm splits the playing area into two maps. The European map runs from South Africa to the Barents Sea, and the Pacifc map runs from Dutch Harbor to the South Indian Ocean. Some scenarios only use one map, in which case all areas on the other map are out of play.')
         .withShouldEndSession(false)          .withSimpleCard(`Maps`,`Cataclysm splits the playing area into two maps. The European map runs from South Africa to the Barents Sea, and the Pacifc map runs from Dutch Harbor to the South Indian Ocean. Some scenarios only use one map, in which case all areas on the other map are out of play.`)         .getResponse();    },};

const LandAreaHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest' && handlerInput.requestEnvelope.request.intent.name === 'LandArea';
    },
    handle(handlerInput) {
        return handlerInput.responseBuilder.speak('land and air units may enter and occupy land areas (7.1.1). Naval units may enter and occupy coastal land areas (2.2.1) (example: Benelux')
         .withShouldEndSession(false)          .withSimpleCard(`LandArea`,`land and air units may enter and occupy land areas (7.1.1). Naval units may enter and occupy coastal land areas (2.2.1) (example: Benelux`)         .getResponse();    },};

const SeaAreaHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest' && handlerInput.requestEnvelope.request.intent.name === 'SeaArea';
    },
    handle(handlerInput) {
        return handlerInput.responseBuilder.speak('all units may enter sea areas, but occupation is usually prohibited (example: Western Approaches).  See section 7.1.2 for full exceptions list.')
         .withShouldEndSession(false)          .withSimpleCard(`SeaArea`,`all units may enter sea areas, but occupation is usually prohibited (example: Western Approaches).  See section 7.1.2 for full exceptions list.`)         .getResponse();    },};

const MixedAreaHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest' && handlerInput.requestEnvelope.request.intent.name === 'MixedArea';
    },
    handle(handlerInput) {
        return handlerInput.responseBuilder.speak('mixed areas combine both land and sea in one area. All units may enter and occupy (7.1.1). Denmark, Hokkaido, Java, New Guinea, Philippines, and Turkey are the only mixed areas.')
         .withShouldEndSession(false)          .withSimpleCard(`MixedArea`,`mixed areas combine both land and sea in one area. All units may enter and occupy (7.1.1). Denmark, Hokkaido, Java, New Guinea, Philippines, and Turkey are the only mixed areas.`)         .getResponse();    },};

const CoastalAreasHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest' && handlerInput.requestEnvelope.request.intent.name === 'CoastalAreas';
    },
    handle(handlerInput) {
        return handlerInput.responseBuilder.speak('All mixed areas, and all land areas adjacent to at least one sea area, are coastal areas. A unit in Egypt, Ruhr, or South Africa may move (7.2) or support (10.2) into any adjacent sea area if otherwise eligible. No unit may use naval movement through (i.e., into and out of) one of these areas unless it is friendly (1.1)')
         .withShouldEndSession(false)          .withSimpleCard(`CoastalAreas`,`All mixed areas, and all land areas adjacent to at least one sea area, are coastal areas. A unit in Egypt, Ruhr, or South Africa may move (7.2) or support (10.2) into any adjacent sea area if otherwise eligible. No unit may use naval movement through (i.e., into and out of) one of these areas unless it is friendly (1.1)`)         .getResponse();    },};

const PortsHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest' && handlerInput.requestEnvelope.request.intent.name === 'Ports';
    },
    handle(handlerInput) {
        return handlerInput.responseBuilder.speak('An area is a port if it is a coastal area (2.2.1), or if it is a sea area containing a naval base (2.3.2). Ports and airfelds determine what areas can be occupied by naval and air units (7.1), respectively.')
         .withShouldEndSession(false)          .withSimpleCard(`Ports`,`An area is a port if it is a coastal area (2.2.1), or if it is a sea area containing a naval base (2.3.2). Ports and airfelds determine what areas can be occupied by naval and air units (7.1), respectively.`)         .getResponse();    },};

const AirfeldHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest' && handlerInput.requestEnvelope.request.intent.name === 'Airfeld';
    },
    handle(handlerInput) {
        return handlerInput.responseBuilder.speak('An area is an airfeld if it is a land or mixed area, or if it is a sea area containing an air base (2.3.2). Ports and airfelds determine what areas can be occupied by naval and air units (7.1), respectively.')
         .withShouldEndSession(false)          .withSimpleCard(`Airfeld`,`An area is an airfeld if it is a land or mixed area, or if it is a sea area containing an air base (2.3.2). Ports and airfelds determine what areas can be occupied by naval and air units (7.1), respectively.`)         .getResponse();    },};

const HomeAreasColoniesHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest' && handlerInput.requestEnvelope.request.intent.name === 'HomeAreasColonies';
    },
    handle(handlerInput) {
        return handlerInput.responseBuilder.speak('At the start of 1933, a power controls all land and mixed areas in that power’s color. If an area in a power’s color has its name in a block matching the power’s color, it is a home area; otherwise it is a colony. A power’s capital is the home area with its name in ALL CAPS.')
         .withShouldEndSession(false)          .withSimpleCard(`HomeAreasColonies`,`At the start of 1933, a power controls all land and mixed areas in that power’s color. If an area in a power’s color has its name in a block matching the power’s color, it is a home area; otherwise it is a colony. A power’s capital is the home area with its name in ALL CAPS.`)         .getResponse();    },};

const AreaControlHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest' && handlerInput.requestEnvelope.request.intent.name === 'AreaControl';
    },
    handle(handlerInput) {
        return handlerInput.responseBuilder.speak('A power controls its home and colony areas containing no opposing or neutral cubes. A power also controls any other areas containing at least one of its own cubes. A power that has surrendered never controls any areas. Land areas are either controlled by a single power or uncontrolled. Sea areas are never controlled by any power. Ownership of a base in an area does not provide control of the area')
         .withShouldEndSession(false)          .withSimpleCard(`AreaControl`,`A power controls its home and colony areas containing no opposing or neutral cubes. A power also controls any other areas containing at least one of its own cubes. A power that has surrendered never controls any areas. Land areas are either controlled by a single power or uncontrolled. Sea areas are never controlled by any power. Ownership of a base in an area does not provide control of the area`)         .getResponse();    },};

const CountryControlHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest' && handlerInput.requestEnvelope.request.intent.name === 'CountryControl';
    },
    handle(handlerInput) {
        return handlerInput.responseBuilder.speak('Land or mixed areas that are not a home or colony area are countries. A country is controlled if a power has a cubein it; otherwise it is uncontrolled. A country is garrisoned if it contains a power’s land unit; otherwise it is ungarrisoned. The presence of a minor army or a non-land unit does not count. All uncontrolled countries are also ungarrisoned, by defnition')
         .withShouldEndSession(false)          .withSimpleCard(`CountryControl`,`Land or mixed areas that are not a home or colony area are countries. A country is controlled if a power has a cubein it; otherwise it is uncontrolled. A country is garrisoned if it contains a power’s land unit; otherwise it is ungarrisoned. The presence of a minor army or a non-land unit does not count. All uncontrolled countries are also ungarrisoned, by defnition`)         .getResponse();    },};

const ChinaHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest' && handlerInput.requestEnvelope.request.intent.name === 'China';
    },
    handle(handlerInput) {
        return handlerInput.responseBuilder.speak('China is not a power. Instead it consists of several independent countries. Note that Manchuria is a separate country and is not part of China. Special rules apply to China concerning the Chinese Civil War .')
         .withShouldEndSession(false)          .withSimpleCard(`China`,`China is not a power. Instead it consists of several independent countries. Note that Manchuria is a separate country and is not part of China. Special rules apply to China concerning the Chinese Civil War .`)         .getResponse();    },};

const OffMapAreasHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest' && handlerInput.requestEnvelope.request.intent.name === 'OffMapAreas';
    },
    handle(handlerInput) {
        return handlerInput.responseBuilder.speak('The following areas are off-map areas.  , Barents Sea  , South Africa  , and Arabian Sea.  An off-map area represents territory that would not ft on the map without severe distortion, but is otherwise treated normally in game terms. White arrows show to what areas an off-map box is adjacent. Off-map areas adjacent to at least one sea or mixed are coastal areas.')
         .withShouldEndSession(false)          .withSimpleCard(`OffMapAreas`,`The following areas are off-map areas.  , Barents Sea  , South Africa  , and Arabian Sea.  An off-map area represents territory that would not ft on the map without severe distortion, but is otherwise treated normally in game terms. White arrows show to what areas an off-map box is adjacent. Off-map areas adjacent to at least one sea or mixed are coastal areas.`)         .getResponse();    },};

const RemoteAreasHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest' && handlerInput.requestEnvelope.request.intent.name === 'RemoteAreas';
    },
    handle(handlerInput) {
        return handlerInput.responseBuilder.speak('The following areas are remote areas. California, Canada, South Africa, Urals, and Washington DC. A remote area can only be entered by units belonging to the area’s controller. An unlimited number of such units may occupy the area')
         .withShouldEndSession(false)          .withSimpleCard(`RemoteAreas`,`The following areas are remote areas. California, Canada, South Africa, Urals, and Washington DC. A remote area can only be entered by units belonging to the area’s controller. An unlimited number of such units may occupy the area`)         .getResponse();    },};

const AdverseTerrainHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest' && handlerInput.requestEnvelope.request.intent.name === 'AdverseTerrain';
    },
    handle(handlerInput) {
        return handlerInput.responseBuilder.speak('Adverse terrain, represented on the maps by a rough texture effect, reﬂects diffcult or mountainous terrain that negates armor superiority and gives the defender a +1 to their combat score (10.4)')
         .withShouldEndSession(false)          .withSimpleCard(`AdverseTerrain`,`Adverse terrain, represented on the maps by a rough texture effect, reﬂects diffcult or mountainous terrain that negates armor superiority and gives the defender a +1 to their combat score (10.4)`)         .getResponse();    },};

const BasesHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest' && handlerInput.requestEnvelope.request.intent.name === 'Bases';
    },
    handle(handlerInput) {
        return handlerInput.responseBuilder.speak('Some sea areas have base symbols printed in them, representing facilities on landmasses too small to count as an area. Bases start the game either owned by a specifc power or unowned . Ownership of a base may change due to a base capture operation, but bases are never created or destroyed')
         .withShouldEndSession(false)          .withSimpleCard(`Bases`,`Some sea areas have base symbols printed in them, representing facilities on landmasses too small to count as an area. Bases start the game either owned by a specifc power or unowned . Ownership of a base may change due to a base capture operation, but bases are never created or destroyed`)         .getResponse();    },};

const BlackArrowsHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest' && handlerInput.requestEnvelope.request.intent.name === 'BlackArrows';
    },
    handle(handlerInput) {
        return handlerInput.responseBuilder.speak('A black crossing arrow connects two areas divided by a strait or other narrow body of water. The areas are adjacent for all purposes. Attacking across a strait gives the defender +1 to their combat score (10.4). A black crossing arrow also permits naval movement between a mixed area and an adjacent coastal area (7.2.2)')
         .withShouldEndSession(false)          .withSimpleCard(`BlackArrows`,`A black crossing arrow connects two areas divided by a strait or other narrow body of water. The areas are adjacent for all purposes. Attacking across a strait gives the defender +1 to their combat score (10.4). A black crossing arrow also permits naval movement between a mixed area and an adjacent coastal area (7.2.2)`)         .getResponse();    },};

const BlueArrowHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest' && handlerInput.requestEnvelope.request.intent.name === 'BlueArrow';
    },
    handle(handlerInput) {
        return handlerInput.responseBuilder.speak('A blue crossing arrow with airplane icons indicates two non-adjacent land or mixed areas that are still close enough for air operations. The areas are adjacent for movement (7.2.3) and support (10.2) of air units only')
         .withShouldEndSession(false)          .withSimpleCard(`BlueArrow`,`A blue crossing arrow with airplane icons indicates two non-adjacent land or mixed areas that are still close enough for air operations. The areas are adjacent for movement (7.2.3) and support (10.2) of air units only`)         .getResponse();    },};

const DelayBoxesHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest' && handlerInput.requestEnvelope.request.intent.name === 'DelayBoxes';
    },
    handle(handlerInput) {
        return handlerInput.responseBuilder.speak('The following areas contain a Delay box. California, South Africa, and Urals. Moving units must stop upon entering an area with a Delay box and may move no further during that action. Temporarily place such units in the Delay box as a reminder; at the end of the action, move them to the area proper')
         .withShouldEndSession(false)          .withSimpleCard(`DelayBoxes`,`The following areas contain a Delay box. California, South Africa, and Urals. Moving units must stop upon entering an area with a Delay box and may move no further during that action. Temporarily place such units in the Delay box as a reminder; at the end of the action, move them to the area proper`)         .getResponse();    },};

const MapConnectorsHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest' && handlerInput.requestEnvelope.request.intent.name === 'MapConnectors';
    },
    handle(handlerInput) {
        return handlerInput.responseBuilder.speak('A map connector connects two areas on different maps. Areas that share a map connector are adjacent for all purposes. A map connector is traversable by land and air movement if it is a white circle, by naval movement if it is a light blue circle, or both if half white and half blue')
         .withShouldEndSession(false)          .withSimpleCard(`MapConnectors`,`A map connector connects two areas on different maps. Areas that share a map connector are adjacent for all purposes. A map connector is traversable by land and air movement if it is a white circle, by naval movement if it is a light blue circle, or both if half white and half blue`)         .getResponse();    },};

const ResistanceRedFistHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest' && handlerInput.requestEnvelope.request.intent.name === 'ResistanceRedFist';
    },
    handle(handlerInput) {
        return handlerInput.responseBuilder.speak('Each country has a resistance value ranging from zero to two, represented by the number of red fst icons in the country. If a country has no resistance icons, its resistance is zero. Areas containing a neutral cube (2.4.5) always have a resistance of one')
         .withShouldEndSession(false)          .withSimpleCard(`ResistanceRedFist`,`Each country has a resistance value ranging from zero to two, represented by the number of red fst icons in the country. If a country has no resistance icons, its resistance is zero. Areas containing a neutral cube (2.4.5) always have a resistance of one`)         .getResponse();    },};

const NaturalResourceHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest' && handlerInput.requestEnvelope.request.intent.name === 'NaturalResource';
    },
    handle(handlerInput) {
        return handlerInput.responseBuilder.speak('Natural resources are the default, having noadditional special rules. Powers collect resources during production (4.4.2) and convert them into builds or offensives')
         .withShouldEndSession(false)          .withSimpleCard(`NaturalResource`,`Natural resources are the default, having noadditional special rules. Powers collect resources during production (4.4.2) and convert them into builds or offensives`)         .getResponse();    },};

const IndustrialResourcesHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest' && handlerInput.requestEnvelope.request.intent.name === 'IndustrialResources';
    },
    handle(handlerInput) {
        return handlerInput.responseBuilder.speak('Industrial resources provide commitment offensives (6.4.2) and war offensives (4.7). They also act as production sites (2.3.9). Powers collect resources during production (4.4.2) and convert them into builds or offensives')
         .withShouldEndSession(false)          .withSimpleCard(`IndustrialResources`,`Industrial resources provide commitment offensives (6.4.2) and war offensives (4.7). They also act as production sites (2.3.9). Powers collect resources during production (4.4.2) and convert them into builds or offensives`)         .getResponse();    },};

const LimitedResourceHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest' && handlerInput.requestEnvelope.request.intent.name === 'LimitedResource';
    },
    handle(handlerInput) {
        return handlerInput.responseBuilder.speak('Limited resources are represented by markers with an area name. They are collected once and then removed from play (4.4). A limited resource may be natural or industrial. Powers collect resources during production (4.4.2) and convert them into builds or offensives')
         .withShouldEndSession(false)          .withSimpleCard(`LimitedResource`,`Limited resources are represented by markers with an area name. They are collected once and then removed from play (4.4). A limited resource may be natural or industrial. Powers collect resources during production (4.4.2) and convert them into builds or offensives`)         .getResponse();    },};

const SpecialResourcesHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest' && handlerInput.requestEnvelope.request.intent.name === 'SpecialResources';
    },
    handle(handlerInput) {
        return handlerInput.responseBuilder.speak('Special resources are markers the Soviet Union puts into play that function as industrial resources (12.3.1). . Powers collect resources during production (4.4.2) and convert them into builds or offensives')
         .withShouldEndSession(false)          .withSimpleCard(`SpecialResources`,`Special resources are markers the Soviet Union puts into play that function as industrial resources (12.3.1). . Powers collect resources during production (4.4.2) and convert them into builds or offensives`)         .getResponse();    },};

const ProductionSitesHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest' && handlerInput.requestEnvelope.request.intent.name === 'ProductionSites';
    },
    handle(handlerInput) {
        return handlerInput.responseBuilder.speak('A production site is a home area controlled by its original power that contains an industrial resource, even if damaged by strategic bombing (9.5.2). Areas containing special Soviet resources are also production sites (12.3)')
         .withShouldEndSession(false)          .withSimpleCard(`ProductionSites`,`A production site is a home area controlled by its original power that contains an industrial resource, even if damaged by strategic bombing (9.5.2). Areas containing special Soviet resources are also production sites (12.3)`)         .getResponse();    },};

const RestrictedTerrainHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest' && handlerInput.requestEnvelope.request.intent.name === 'RestrictedTerrain';
    },
    handle(handlerInput) {
        return handlerInput.responseBuilder.speak('A restricted terrain symbol blocks lines of communications (4.3) through an area, and reduces occupation limits (7.1) in the area. Movement (7.2.1) is not affected by restricted terrain. The effects of restrict')
         .withShouldEndSession(false)          .withSimpleCard(`RestrictedTerrain`,`A restricted terrain symbol blocks lines of communications (4.3) through an area, and reduces occupation limits (7.1) in the area. Movement (7.2.1) is not affected by restricted terrain. The effects of restrict`)         .getResponse();    },};

const CubesHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest' && handlerInput.requestEnvelope.request.intent.name === 'Cubes';
    },
    handle(handlerInput) {
        return handlerInput.responseBuilder.speak('Each power has a set of counters and wooden cubes in its color. The number of each power’s counters and cubes are a hard limit; you cannot make more or substitute other pieces if you run out. Counters not in a specifc power’s color are neutral and do not belong to any individual power.')
         .withShouldEndSession(false)          .withSimpleCard(`Cubes`,`Each power has a set of counters and wooden cubes in its color. The number of each power’s counters and cubes are a hard limit; you cannot make more or substitute other pieces if you run out. Counters not in a specifc power’s color are neutral and do not belong to any individual power.`)         .getResponse();    },};

const PowerMarkersHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest' && handlerInput.requestEnvelope.request.intent.name === 'PowerMarkers';
    },
    handle(handlerInput) {
        return handlerInput.responseBuilder.speak('A power’s ﬂags , offensives , resources , and bases  are kept in its available markers box on its status card when not in use. They do not count against the power’s force pool limit . Note that a power’s resource markers are on the back of its offensive markers')
         .withShouldEndSession(false)          .withSimpleCard(`PowerMarkers`,`A power’s ﬂags , offensives , resources , and bases  are kept in its available markers box on its status card when not in use. They do not count against the power’s force pool limit . Note that a power’s resource markers are on the back of its offensive markers`)         .getResponse();    },};

const MinorArmiesHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest' && handlerInput.requestEnvelope.request.intent.name === 'MinorArmies';
    },
    handle(handlerInput) {
        return handlerInput.responseBuilder.speak('Some countries have a minor army for defense. A minor army cannot move, attack, or retreat, but does count towards the occupation limit of its area . Chinese armies are also minor armies for all purposes, but have increased capabilities. A minor army cannot be voluntarily removed by its controlling power')
         .withShouldEndSession(false)          .withSimpleCard(`MinorArmies`,`Some countries have a minor army for defense. A minor army cannot move, attack, or retreat, but does count towards the occupation limit of its area . Chinese armies are also minor armies for all purposes, but have increased capabilities. A minor army cannot be voluntarily removed by its controlling power`)         .getResponse();    },};

const NeutralCubesHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest' && handlerInput.requestEnvelope.request.intent.name === 'NeutralCubes';
    },
    handle(handlerInput) {
        return handlerInput.responseBuilder.speak('Neutral cubes are white. And are used to mark home or colony areas that are uncontrolled due to surrender  or civil war. An area with a neutral cube is treated as an uncontrolled country with a resistance of one')
         .withShouldEndSession(false)          .withSimpleCard(`NeutralCubes`,`Neutral cubes are white. And are used to mark home or colony areas that are uncontrolled due to surrender  or civil war. An area with a neutral cube is treated as an uncontrolled country with a resistance of one`)         .getResponse();    },};

const ReserveTrackHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest' && handlerInput.requestEnvelope.request.intent.name === 'ReserveTrack';
    },
    handle(handlerInput) {
        return handlerInput.responseBuilder.speak('Effectiveness Track and Reserve Track: This combined track records the political effectiveness (5.3) of each power, and contains the counters held in reserve by the powers (3.4)')
         .withShouldEndSession(false)          .withSimpleCard(`ReserveTrack`,`Effectiveness Track and Reserve Track: This combined track records the political effectiveness (5.3) of each power, and contains the counters held in reserve by the powers (3.4)`)         .getResponse();    },};

const FailedPoliticalActionHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest' && handlerInput.requestEnvelope.request.intent.name === 'FailedPoliticalAction';
    },
    handle(handlerInput) {
        return handlerInput.responseBuilder.speak('Failed Political Action Boxes: These boxes record when a power has failed a political action (5.4) and is eligible for a bonus on its next political action of the same type.')
         .withShouldEndSession(false)          .withSimpleCard(`FailedPoliticalAction`,`Failed Political Action Boxes: These boxes record when a power has failed a political action (5.4) and is eligible for a bonus on its next political action of the same type.`)         .getResponse();    },};

const PoliticalDisplayHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest' && handlerInput.requestEnvelope.request.intent.name === 'PoliticalDisplay';
    },
    handle(handlerInput) {
        return handlerInput.responseBuilder.speak('This triangular display records the existence of wars (5.6.3) and alliances (6.1) between powers.')
         .withShouldEndSession(false)          .withSimpleCard(`PoliticalDisplay`,`This triangular display records the existence of wars (5.6.3) and alliances (6.1) between powers.`)         .getResponse();    },};

const StabilityTrackHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest' && handlerInput.requestEnvelope.request.intent.name === 'StabilityTrack';
    },
    handle(handlerInput) {
        return handlerInput.responseBuilder.speak('This track records how close a power is to collapse (5.5.2). When a power’s stability increases, move the marker towards Steady. When a power’s stability decreases, move the marker towards Collapse.')
         .withShouldEndSession(false)          .withSimpleCard(`StabilityTrack`,`This track records how close a power is to collapse (5.5.2). When a power’s stability increases, move the marker towards Steady. When a power’s stability decreases, move the marker towards Collapse.`)         .getResponse();    },};

const TurnTrackHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest' && handlerInput.requestEnvelope.request.intent.name === 'TurnTrack';
    },
    handle(handlerInput) {
        return handlerInput.responseBuilder.speak('This track records the current game turn and also acts as a holding box for counters until the following turn (3.2.1).')
         .withShouldEndSession(false)          .withSimpleCard(`TurnTrack`,`This track records the current game turn and also acts as a holding box for counters until the following turn (3.2.1).`)         .getResponse();    },};

const VictoryPointTrackHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest' && handlerInput.requestEnvelope.request.intent.name === 'VictoryPointTrack';
    },
    handle(handlerInput) {
        return handlerInput.responseBuilder.speak('This track records the victory points of each individual power, as well as the total victory points for each ideology (1.7.1).')
         .withShouldEndSession(false)          .withSimpleCard(`VictoryPointTrack`,`This track records the victory points of each individual power, as well as the total victory points for each ideology (1.7.1).`)         .getResponse();    },};

const PowerStatusCardHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest' && handlerInput.requestEnvelope.request.intent.name === 'PowerStatusCard';
    },
    handle(handlerInput) {
        return handlerInput.responseBuilder.speak('Each power has a status card that houses the power’s available markers  and force pool . A power’s status card also tracks its current commitment , which determines the power’s conversion rate , force pool limit, effectiveness , and home front penalty. The card also indicates which opposing powers provoke the power (and are themselves provoked) by alliance formation or commitment increase')
         .withShouldEndSession(false)          .withSimpleCard(`PowerStatusCard`,`Each power has a status card that houses the power’s available markers  and force pool . A power’s status card also tracks its current commitment , which determines the power’s conversion rate , force pool limit, effectiveness , and home front penalty. The card also indicates which opposing powers provoke the power (and are themselves provoked) by alliance formation or commitment increase`)         .getResponse();    },};

const ActionCupHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest' && handlerInput.requestEnvelope.request.intent.name === 'ActionCup';
    },
    handle(handlerInput) {
        return handlerInput.responseBuilder.speak('The action cup contains all the counters due to enter play for a given turn. During the action phase, the counters in the cup are mixed and then drawn at random, one at a time. You will need to provide an opaque wide-mouthed container to serve as the action cup.')
         .withShouldEndSession(false)          .withSimpleCard(`ActionCup`,`The action cup contains all the counters due to enter play for a given turn. During the action phase, the counters in the cup are mixed and then drawn at random, one at a time. You will need to provide an opaque wide-mouthed container to serve as the action cup.`)         .getResponse();    },};

const OrderOfPlayHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest' && handlerInput.requestEnvelope.request.intent.name === 'OrderOfPlay';
    },
    handle(handlerInput) {
        return handlerInput.responseBuilder.speak('Whenever the rules instruct powers to perform a game activity in order, that order is determined by comparing their effectiveness, either in decreasing effectiveness order  or in increasing effectiveness order. When resolving ties in decreasing effectiveness order, Fascists go before Communists, which go before Democracies. In increasing effectiveness order, Democracies go before Communists, which go before Fascists.')
         .withShouldEndSession(false)          .withSimpleCard(`OrderOfPlay`,`Whenever the rules instruct powers to perform a game activity in order, that order is determined by comparing their effectiveness, either in decreasing effectiveness order  or in increasing effectiveness order. When resolving ties in decreasing effectiveness order, Fascists go before Communists, which go before Democracies. In increasing effectiveness order, Democracies go before Communists, which go before Fascists.`)         .getResponse();    },};

const AdministrationPhaseHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest' && handlerInput.requestEnvelope.request.intent.name === 'AdministrationPhase';
    },
    handle(handlerInput) {
        return handlerInput.responseBuilder.speak('The steps in the administration phase are carried out in the following sequence.   Distribute turn track counters (3.2.1) , Gain ﬂags (3.2.2) , Production (4.2) , and Final disposition of production counters (3.2.4)')
         .withShouldEndSession(false)          .withSimpleCard(`AdministrationPhase`,`The steps in the administration phase are carried out in the following sequence.   Distribute turn track counters (3.2.1) , Gain ﬂags (3.2.2) , Production (4.2) , and Final disposition of production counters (3.2.4)`)         .getResponse();    },};

const GainFlagsHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest' && handlerInput.requestEnvelope.request.intent.name === 'GainFlags';
    },
    handle(handlerInput) {
        return handlerInput.responseBuilder.speak('Each power gains one ﬂag from their available markers. Gained ﬂags are placed in the power’s production holding box')
         .withShouldEndSession(false)          .withSimpleCard(`GainFlags`,`Each power gains one ﬂag from their available markers. Gained ﬂags are placed in the power’s production holding box`)         .getResponse();    },};

const ProductionHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest' && handlerInput.requestEnvelope.request.intent.name === 'Production';
    },
    handle(handlerInput) {
        return handlerInput.responseBuilder.speak('Each power in increasing effectiveness order collects resources and converts them to builds or offensives . Builds are spent immediately to construct new units (8.3), and offensives are used in the action phase to move and attack with units in play.')
         .withShouldEndSession(false)          .withSimpleCard(`Production`,`Each power in increasing effectiveness order collects resources and converts them to builds or offensives . Builds are spent immediately to construct new units (8.3), and offensives are used in the action phase to move and attack with units in play.`)         .getResponse();    },};

const ActionPhaseHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest' && handlerInput.requestEnvelope.request.intent.name === 'ActionPhase';
    },
    handle(handlerInput) {
        return handlerInput.responseBuilder.speak('In the action phase, counters are played one at a time, either from reserve, or randomly drawn from the action cup. The player with the lowest score (1.7.1) is in charge of drawing counters for the entire turn.')
         .withShouldEndSession(false)          .withSimpleCard(`ActionPhase`,`In the action phase, counters are played one at a time, either from reserve, or randomly drawn from the action cup. The player with the lowest score (1.7.1) is in charge of drawing counters for the entire turn.`)         .getResponse();    },};

const ReserveHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest' && handlerInput.requestEnvelope.request.intent.name === 'Reserve';
    },
    handle(handlerInput) {
        return handlerInput.responseBuilder.speak('Each power may hold one ﬂag, unit, offensive, resource, or upgrade marker on the reserve track as its reserve. The reserved counter is kept in the same row on the track as the power’s effectiveness marker. A given power may never have more than one counter in reserve at a time (regardless of type).')
         .withShouldEndSession(false)          .withSimpleCard(`Reserve`,`Each power may hold one ﬂag, unit, offensive, resource, or upgrade marker on the reserve track as its reserve. The reserved counter is kept in the same row on the track as the power’s effectiveness marker. A given power may never have more than one counter in reserve at a time (regardless of type).`)         .getResponse();    },};

const InterruptsHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest' && handlerInput.requestEnvelope.request.intent.name === 'Interrupts';
    },
    handle(handlerInput) {
        return handlerInput.responseBuilder.speak('Immediately before any counter is drawn from the cup, any power may interrupt by playing their counter in reserve. If more than one power wants to interrupt, priority goes in decreasing effectiveness order.  Different powers may interrupt in succession; however, an ideology can never act twice in a row via interrupt. A power cannot interrupt if a counter from any power in its ideology was the last to be drawn from the cup or played from reserve this turn.')
         .withShouldEndSession(false)          .withSimpleCard(`Interrupts`,`Immediately before any counter is drawn from the cup, any power may interrupt by playing their counter in reserve. If more than one power wants to interrupt, priority goes in decreasing effectiveness order.  Different powers may interrupt in succession; however, an ideology can never act twice in a row via interrupt. A power cannot interrupt if a counter from any power in its ideology was the last to be drawn from the cup or played from reserve this turn.`)         .getResponse();    },};

const ResolvingFlagHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest' && handlerInput.requestEnvelope.request.intent.name === 'ResolvingFlag';
    },
    handle(handlerInput) {
        return handlerInput.responseBuilder.speak('When a ﬂag is played, its power performs one political action (6.0). When an offensive is played, its power performs one or more military actions (8.0)')
         .withShouldEndSession(false)          .withSimpleCard(`ResolvingFlag`,`When a ﬂag is played, its power performs one political action (6.0). When an offensive is played, its power performs one or more military actions (8.0)`)         .getResponse();    },};

const ResolvingUnitHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest' && handlerInput.requestEnvelope.request.intent.name === 'ResolvingUnit';
    },
    handle(handlerInput) {
        return handlerInput.responseBuilder.speak('When a unit is played, its power must place it at a production site on its regular, non-upgraded side. Naval units must be placed in a coastal home area to which a production site can trace a line of communication. If the unit has no legal area for placement, the power must choose to place it in reserve or on the turn track for next turn.')
         .withShouldEndSession(false)          .withSimpleCard(`ResolvingUnit`,`When a unit is played, its power must place it at a production site on its regular, non-upgraded side. Naval units must be placed in a coastal home area to which a production site can trace a line of communication. If the unit has no legal area for placement, the power must choose to place it in reserve or on the turn track for next turn.`)         .getResponse();    },};

const ResolvingUpgradeHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest' && handlerInput.requestEnvelope.request.intent.name === 'ResolvingUpgrade';
    },
    handle(handlerInput) {
        return handlerInput.responseBuilder.speak('Upgrade markers are played to improve existing units. When an upgrade is played, its power traces an LOC to an area containing one of its units of the appropriate type, then ﬂips that unit to its upgraded side (tank army, carrier ﬂeet, or strategic air force). Return the upgrade marker to the power’s force pool')
         .withShouldEndSession(false)          .withSimpleCard(`ResolvingUpgrade`,`Upgrade markers are played to improve existing units. When an upgrade is played, its power traces an LOC to an area containing one of its units of the appropriate type, then ﬂips that unit to its upgraded side (tank army, carrier ﬂeet, or strategic air force). Return the upgrade marker to the power’s force pool`)         .getResponse();    },};

const SuddenDeathHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest' && handlerInput.requestEnvelope.request.intent.name === 'SuddenDeath';
    },
    handle(handlerInput) {
        return handlerInput.responseBuilder.speak('After the third Crisis marker is drawn in a turn, ﬂip the Turn marker to its Sudden Death side. When a Crisis marker is drawn during Sudden Death, do not roll for an event—instead check to see if the action phase is over. Empty out the contents of the action cup. Each power compares the number of its own counters emptied from the cup to the number below based on its current commitment. If any power meets the criteria below, the action phase continues.')
         .withShouldEndSession(false)          .withSimpleCard(`SuddenDeath`,`After the third Crisis marker is drawn in a turn, ﬂip the Turn marker to its Sudden Death side. When a Crisis marker is drawn during Sudden Death, do not roll for an event—instead check to see if the action phase is over. Empty out the contents of the action cup. Each power compares the number of its own counters emptied from the cup to the number below based on its current commitment. If any power meets the criteria below, the action phase continues.`)         .getResponse();    },};

const HomeFrontHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest' && handlerInput.requestEnvelope.request.intent.name === 'HomeFront';
    },
    handle(handlerInput) {
        return handlerInput.responseBuilder.speak('When a Home Front marker is drawn, it must immediately conduct a home front stability test unless its commitment is currently civilian. Then, the power may perform a deployment action. When the Soviet Home Front marker is drawn, the Soviet Union may change its Posture if it has not done so yet this turn')
         .withShouldEndSession(false)          .withSimpleCard(`HomeFront`,`When a Home Front marker is drawn, it must immediately conduct a home front stability test unless its commitment is currently civilian. Then, the power may perform a deployment action. When the Soviet Home Front marker is drawn, the Soviet Union may change its Posture if it has not done so yet this turn`)         .getResponse();    },};

const CommitmentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest' && handlerInput.requestEnvelope.request.intent.name === 'Commitment';
    },
    handle(handlerInput) {
        return handlerInput.responseBuilder.speak('The ability of a power to produce material for war is governed by its commitment, a measure of the portion of its economy geared for war. A power’s commitment determines its political effectiveness, its force pool limits, and its military effciency, as indicated on its status card. Commitment can only be increased, shifting to the right')
         .withShouldEndSession(false)          .withSimpleCard(`Commitment`,`The ability of a power to produce material for war is governed by its commitment, a measure of the portion of its economy geared for war. A power’s commitment determines its political effectiveness, its force pool limits, and its military effciency, as indicated on its status card. Commitment can only be increased, shifting to the right`)         .getResponse();    },};

const ExhaustionHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest' && handlerInput.requestEnvelope.request.intent.name === 'Exhaustion';
    },
    handle(handlerInput) {
        return handlerInput.responseBuilder.speak('When a power collapses (5.5.2) while at mobilization or total war, shift its commitment directly to exhaustion. Exhaustion is not a commitment increase for any purpose. It is a permanent condition and cannot be prevented or alleviated in any way')
         .withShouldEndSession(false)          .withSimpleCard(`Exhaustion`,`When a power collapses (5.5.2) while at mobilization or total war, shift its commitment directly to exhaustion. Exhaustion is not a commitment increase for any purpose. It is a permanent condition and cannot be prevented or alleviated in any way`)         .getResponse();    },};

const ForcePoolHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest' && handlerInput.requestEnvelope.request.intent.name === 'ForcePool';
    },
    handle(handlerInput) {
        return handlerInput.responseBuilder.speak('A force pool includes all of its units and upgrade markers that are currently available or in play. The total number of these units and markers that are on the maps, in the action cup, and/or unconstructed on its status card is constrained by the power’s force pool limit; which is dependent on its commitment as indicated on the power’s status card.')
         .withShouldEndSession(false)          .withSimpleCard(`ForcePool`,`A force pool includes all of its units and upgrade markers that are currently available or in play. The total number of these units and markers that are on the maps, in the action cup, and/or unconstructed on its status card is constrained by the power’s force pool limit; which is dependent on its commitment as indicated on the power’s status card.`)         .getResponse();    },};

const ProductionSequenceHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest' && handlerInput.requestEnvelope.request.intent.name === 'ProductionSequence';
    },
    handle(handlerInput) {
        return handlerInput.responseBuilder.speak('Collect resources, including by transfer  ,Convert resources   ,Construct units   ,Gain war offensives   , and Repair damaged resources')
         .withShouldEndSession(false)          .withSimpleCard(`ProductionSequence`,`Collect resources, including by transfer  ,Convert resources   ,Construct units   ,Gain war offensives   , and Repair damaged resources`)         .getResponse();    },};

const LineOfCommunicationsHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest' && handlerInput.requestEnvelope.request.intent.name === 'LineOfCommunications';
    },
    handle(handlerInput) {
        return handlerInput.responseBuilder.speak('A line of communications must be traced under the following circumstances.  To place a naval unit  , To play an upgrade marker , To collect a resource  , To gain commitment offensives  , To determine supply status during an operation, To intervene in a civil war')
         .withShouldEndSession(false)          .withSimpleCard(`LineOfCommunications`,`A line of communications must be traced under the following circumstances.  To place a naval unit  , To play an upgrade marker , To collect a resource  , To gain commitment offensives  , To determine supply status during an operation, To intervene in a civil war`)         .getResponse();    },};

const TransferResourcesHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest' && handlerInput.requestEnvelope.request.intent.name === 'TransferResources';
    },
    handle(handlerInput) {
        return handlerInput.responseBuilder.speak('When the United States transfers a resource, it is collected by the receiving power during its own production, by tracing a line of communications (4.3) from a United States home area to a production site of the recipient. Treat ports of both the United States and the receiving power as friendly for the purposes of tracing the LOC')
         .withShouldEndSession(false)          .withSimpleCard(`TransferResources`,`When the United States transfers a resource, it is collected by the receiving power during its own production, by tracing a line of communications (4.3) from a United States home area to a production site of the recipient. Treat ports of both the United States and the receiving power as friendly for the purposes of tracing the LOC`)         .getResponse();    },};

const CollectingResourcesHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest' && handlerInput.requestEnvelope.request.intent.name === 'CollectingResources';
    },
    handle(handlerInput) {
        return handlerInput.responseBuilder.speak('A power may collect a resource if it can trace an LOC to the area containing the resource. A production site’s own resource need not trace an LOC. For each resource collected , the power’s player moves one resource marker from its available markers box to its production holding box. If a power does not have enough resource markers, the excess resources are lost and unavailable for production this turn.')
         .withShouldEndSession(false)          .withSimpleCard(`CollectingResources`,`A power may collect a resource if it can trace an LOC to the area containing the resource. A production site’s own resource need not trace an LOC. For each resource collected , the power’s player moves one resource marker from its available markers box to its production holding box. If a power does not have enough resource markers, the excess resources are lost and unavailable for production this turn.`)         .getResponse();    },};

const ConvertResourcesHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest' && handlerInput.requestEnvelope.request.intent.name === 'ConvertResources';
    },
    handle(handlerInput) {
        return handlerInput.responseBuilder.speak('Each successfully collected resource may be converted into either a single offensive marker, or a variable number of builds depending on a power’s current commitment . For each resource marker in a power’s production holding box, the player either ﬂips it to the offensive side , or leaves it on the resource side')
         .withShouldEndSession(false)          .withSimpleCard(`ConvertResources`,`Each successfully collected resource may be converted into either a single offensive marker, or a variable number of builds depending on a power’s current commitment . For each resource marker in a power’s production holding box, the player either ﬂips it to the offensive side , or leaves it on the resource side`)         .getResponse();    },};

const ConstructionHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest' && handlerInput.requestEnvelope.request.intent.name === 'Construction';
    },
    handle(handlerInput) {
        return handlerInput.responseBuilder.speak('The power counts its resource markers and multiplies that number by its commitment conversion rate. The result is the number of builds available to be spent during production (round down). Return the resource markers to the power’s available markers box.')
         .withShouldEndSession(false)          .withSimpleCard(`Construction`,`The power counts its resource markers and multiplies that number by its commitment conversion rate. The result is the number of builds available to be spent during production (round down). Return the resource markers to the power’s available markers box.`)         .getResponse();    },};

const WarOffensivesHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest' && handlerInput.requestEnvelope.request.intent.name === 'WarOffensives';
    },
    handle(handlerInput) {
        return handlerInput.responseBuilder.speak('Belligerent powers now gain one offensive marker from their available markers box for each industrial resource they collected this turn, even if it was a limited resource. These war offensives are placed in the power’s production holding box. A resource from a previous turn is never counted as an industrial resource for war offensives.')
         .withShouldEndSession(false)          .withSimpleCard(`WarOffensives`,`Belligerent powers now gain one offensive marker from their available markers box for each industrial resource they collected this turn, even if it was a limited resource. These war offensives are placed in the power’s production holding box. A resource from a previous turn is never counted as an industrial resource for war offensives.`)         .getResponse();    },};

const GainingFlagsHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest' && handlerInput.requestEnvelope.request.intent.name === 'GainingFlags';
    },
    handle(handlerInput) {
        return handlerInput.responseBuilder.speak('When a power gains a ﬂag, it takes a single ﬂag from the available markers box of its status card and must immediately put it in the action cup or in reserve or in its production holding box. If no ﬂags markers are available, any ﬂag it would gain is forfeit.')
         .withShouldEndSession(false)          .withSimpleCard(`GainingFlags`,`When a power gains a ﬂag, it takes a single ﬂag from the available markers box of its status card and must immediately put it in the action cup or in reserve or in its production holding box. If no ﬂags markers are available, any ﬂag it would gain is forfeit.`)         .getResponse();    },};

const ProvocationHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest' && handlerInput.requestEnvelope.request.intent.name === 'Provocation';
    },
    handle(handlerInput) {
        return handlerInput.responseBuilder.speak('A power is provoked when an opposing power does any of the following.   Forms or joins an alliance, Declares war on it or its ally, Increases commitment, Intervenes  in an area where it has interests., Declares an operation against an area where it has interests, Performs a surprise attack against it , Gains control of an area where it has interests')
         .withShouldEndSession(false)          .withSimpleCard(`Provocation`,`A power is provoked when an opposing power does any of the following.   Forms or joins an alliance, Declares war on it or its ally, Increases commitment, Intervenes  in an area where it has interests., Declares an operation against an area where it has interests, Performs a surprise attack against it , Gains control of an area where it has interests`)         .getResponse();    },};

const EffectivenessHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest' && handlerInput.requestEnvelope.request.intent.name === 'Effectiveness';
    },
    handle(handlerInput) {
        return handlerInput.responseBuilder.speak('Effectiveness represents a power’s willingness and ability to form and apply a coherent political policy. Political actions undertaken by a power are resolved by an effectiveness check . Stability tests and some other game actions and events also require an effectiveness check.')
         .withShouldEndSession(false)          .withSimpleCard(`Effectiveness`,`Effectiveness represents a power’s willingness and ability to form and apply a coherent political policy. Political actions undertaken by a power are resolved by an effectiveness check . Stability tests and some other game actions and events also require an effectiveness check.`)         .getResponse();    },};

const FailedPoliticalActionsHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest' && handlerInput.requestEnvelope.request.intent.name === 'FailedPoliticalActions';
    },
    handle(handlerInput) {
        return handlerInput.responseBuilder.speak('Every time a power fails the effectiveness check when attempting a political action, it may place a cube in the corresponding failed political action box . If the next political action by that power is the same type, apply a +1 bonus to the result of its effectiveness check for each of its cubes in the failed action box.')
         .withShouldEndSession(false)          .withSimpleCard(`FailedPoliticalActions`,`Every time a power fails the effectiveness check when attempting a political action, it may place a cube in the corresponding failed political action box . If the next political action by that power is the same type, apply a +1 bonus to the result of its effectiveness check for each of its cubes in the failed action box.`)         .getResponse();    },};

const StabilityHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest' && handlerInput.requestEnvelope.request.intent.name === 'Stability';
    },
    handle(handlerInput) {
        return handlerInput.responseBuilder.speak('The stability of each power is marked on the stability track, ranging from steady to wavering to unstable, and fnally collapse. A power that collapses may surrender and be eliminated from the game.')
         .withShouldEndSession(false)          .withSimpleCard(`Stability`,`The stability of each power is marked on the stability track, ranging from steady to wavering to unstable, and fnally collapse. A power that collapses may surrender and be eliminated from the game.`)         .getResponse();    },};

const StabilityTestsHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest' && handlerInput.requestEnvelope.request.intent.name === 'StabilityTests';
    },
    handle(handlerInput) {
        return handlerInput.responseBuilder.speak('A stability test is an effectiveness check (5.3). If it succeeds, there is no change. If the test fails, the power’s stability is reduced one level . If a power’s stability is reduced to collapse , it may also surrender')
         .withShouldEndSession(false)          .withSimpleCard(`StabilityTests`,`A stability test is an effectiveness check (5.3). If it succeeds, there is no change. If the test fails, the power’s stability is reduced one level . If a power’s stability is reduced to collapse , it may also surrender`)         .getResponse();    },};

const CollapseHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest' && handlerInput.requestEnvelope.request.intent.name === 'Collapse';
    },
    handle(handlerInput) {
        return handlerInput.responseBuilder.speak('The collapse of a government can represent a change ranging from the formation of a new cabinet, a coup day tah, or worse. If a power’s stability marker is moved to the collapse box, the power collapses and may surrender')
         .withShouldEndSession(false)          .withSimpleCard(`Collapse`,`The collapse of a government can represent a change ranging from the formation of a new cabinet, a coup day tah, or worse. If a power’s stability marker is moved to the collapse box, the power collapses and may surrender`)         .getResponse();    },};

const CollapseProcedureHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest' && handlerInput.requestEnvelope.request.intent.name === 'CollapseProcedure';
    },
    handle(handlerInput) {
        return handlerInput.responseBuilder.speak('When a power collapses, do the following.  Each enemy power gains a ﬂag.   Any stability tests pending for the collapsed power are canceled.   Set the power’s stability to wavering.  Return the power’s reserve to its status card. Perform an effectiveness check for each area. containing the powers cubes.  The power’s allies must conduct a stability test. Then the power breaks its alliance.  The power must offer an armistice to all enemy powers.')
         .withShouldEndSession(false)          .withSimpleCard(`CollapseProcedure`,`When a power collapses, do the following.  Each enemy power gains a ﬂag.   Any stability tests pending for the collapsed power are canceled.   Set the power’s stability to wavering.  Return the power’s reserve to its status card. Perform an effectiveness check for each area. containing the powers cubes.  The power’s allies must conduct a stability test. Then the power breaks its alliance.  The power must offer an armistice to all enemy powers.`)         .getResponse();    },};

const SurrenderHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest' && handlerInput.requestEnvelope.request.intent.name === 'Surrender';
    },
    handle(handlerInput) {
        return handlerInput.responseBuilder.speak('See section 5.5.4 for full details. A power also immediately surrenders if at any time it controls none of its home areas. When a power surrenders, it is eliminated from the game and is no longer an active power')
         .withShouldEndSession(false)          .withSimpleCard(`Surrender`,`See section 5.5.4 for full details. A power also immediately surrenders if at any time it controls none of its home areas. When a power surrenders, it is eliminated from the game and is no longer an active power`)         .getResponse();    },};

const StartingWarsHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest' && handlerInput.requestEnvelope.request.intent.name === 'StartingWars';
    },
    handle(handlerInput) {
        return handlerInput.responseBuilder.speak('A power becomes belligerent by performing or being the target of a declaration of war political action or surprise attack . Communist and Democratic powers can only initiate a war by the declaration of war political action; Fascist powers can start war by either a DOW or a surprise attack. When a power becomes belligerent, its allies must decide whether to uphold their alliances and join the war . Any allies that do not join the war immediately break the alliance')
         .withShouldEndSession(false)          .withSimpleCard(`StartingWars`,`A power becomes belligerent by performing or being the target of a declaration of war political action or surprise attack . Communist and Democratic powers can only initiate a war by the declaration of war political action; Fascist powers can start war by either a DOW or a surprise attack. When a power becomes belligerent, its allies must decide whether to uphold their alliances and join the war . Any allies that do not join the war immediately break the alliance`)         .getResponse();    },};

const EndingWarsHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest' && handlerInput.requestEnvelope.request.intent.name === 'EndingWars';
    },
    handle(handlerInput) {
        return handlerInput.responseBuilder.speak('Once started, a war can end in one of two ways. Armistice: A war can be ended at any time by the mutual consent of all involved powers. Capitulation: A war ends if the only remaining belligerent powers involved are from a single ideology. When a war ends, remove the corresponding power cubes from the political display.')
         .withShouldEndSession(false)          .withSimpleCard(`EndingWars`,`Once started, a war can end in one of two ways. Armistice: A war can be ended at any time by the mutual consent of all involved powers. Capitulation: A war ends if the only remaining belligerent powers involved are from a single ideology. When a war ends, remove the corresponding power cubes from the political display.`)         .getResponse();    },};

const WarStatusHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest' && handlerInput.requestEnvelope.request.intent.name === 'WarStatus';
    },
    handle(handlerInput) {
        return handlerInput.responseBuilder.speak('The war status marker tracks the global extent and intensity of war. It does not apply to any individual power. When resolving a crisis event , if the war status marker is on the political display or turn track, resolve the Wartime event; if it is not, resolve the Peacetime event')
         .withShouldEndSession(false)          .withSimpleCard(`WarStatus`,`The war status marker tracks the global extent and intensity of war. It does not apply to any individual power. When resolving a crisis event , if the war status marker is on the political display or turn track, resolve the Wartime event; if it is not, resolve the Peacetime event`)         .getResponse();    },};

const LimitedWarHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest' && handlerInput.requestEnvelope.request.intent.name === 'LimitedWar';
    },
    handle(handlerInput) {
        return handlerInput.responseBuilder.speak('The frst time any powers become belligerent (5.6.1), immediately place the war status marker on its Limited War side in the center of the political display. The war status marker is not removed from play if at any future time there are no belligerent powers.')
         .withShouldEndSession(false)          .withSimpleCard(`LimitedWar`,`The frst time any powers become belligerent (5.6.1), immediately place the war status marker on its Limited War side in the center of the political display. The war status marker is not removed from play if at any future time there are no belligerent powers.`)         .getResponse();    },};

const GlobalWarHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest' && handlerInput.requestEnvelope.request.intent.name === 'GlobalWar';
    },
    handle(handlerInput) {
        return handlerInput.responseBuilder.speak('Flip the war status marker from its Limited War side to its Global War side immediately when:  any power increases its commitment to total war; or  at least one power from each ideology is currently belligerent (not necessarily in the same war). Once on its Global War side, the war status marker never reverts to its Limited War side')
         .withShouldEndSession(false)          .withSimpleCard(`GlobalWar`,`Flip the war status marker from its Limited War side to its Global War side immediately when:  any power increases its commitment to total war; or  at least one power from each ideology is currently belligerent (not necessarily in the same war). Once on its Global War side, the war status marker never reverts to its Limited War side`)         .getResponse();    },};

const DiplomaticOpportunityHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest' && handlerInput.requestEnvelope.request.intent.name === 'DiplomaticOpportunity';
    },
    handle(handlerInput) {
        return handlerInput.responseBuilder.speak('A diplomatic opportunity occurs when control of a country comes up for grabs due to various circumstances. The powers eligible to gain control of the country depend on the circumstances, as follows:  When an attack by a power fails to conquer an uncontrolled country.  When a home area of a surrendered power becomes a country.   When a civil war faction with multiple patrons wins a decisive victory.  When a Communist Coup or Fascist Coup Crisis Event fails to gain control of an uncontrolled country.')
         .withShouldEndSession(false)          .withSimpleCard(`DiplomaticOpportunity`,`A diplomatic opportunity occurs when control of a country comes up for grabs due to various circumstances. The powers eligible to gain control of the country depend on the circumstances, as follows:  When an attack by a power fails to conquer an uncontrolled country.  When a home area of a surrendered power becomes a country.   When a civil war faction with multiple patrons wins a decisive victory.  When a Communist Coup or Fascist Coup Crisis Event fails to gain control of an uncontrolled country.`)         .getResponse();    },};

const JoiningAllianceHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest' && handlerInput.requestEnvelope.request.intent.name === 'JoiningAlliance';
    },
    handle(handlerInput) {
        return handlerInput.responseBuilder.speak('There can only be one alliance per ideology. If two powers are allied, a third power in the ideology may only join the existing alliance. To do so, that third power only must play a ﬂag and pass an effectiveness check. Provocation due to a successful alliance occurs based on all three powers in the alliance, noting again that an opposing power cannot gain more than one ﬂag for the action')
         .withShouldEndSession(false)          .withSimpleCard(`JoiningAlliance`,`There can only be one alliance per ideology. If two powers are allied, a third power in the ideology may only join the existing alliance. To do so, that third power only must play a ﬂag and pass an effectiveness check. Provocation due to a successful alliance occurs based on all three powers in the alliance, noting again that an opposing power cannot gain more than one ﬂag for the action`)         .getResponse();    },};

const PoliticalActionHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest' && handlerInput.requestEnvelope.request.intent.name === 'PoliticalAction';
    },
    handle(handlerInput) {
        return handlerInput.responseBuilder.speak('A power attempts a political action when it plays a ﬂag or, occasionally, when called for by a crisis event. In general, a political action requires an effectiveness check to succeed. If the check fails, the power may qualify for a failed political action bonus on future actions')
         .withShouldEndSession(false)          .withSimpleCard(`PoliticalAction`,`A power attempts a political action when it plays a ﬂag or, occasionally, when called for by a crisis event. In general, a political action requires an effectiveness check to succeed. If the check fails, the power may qualify for a failed political action bonus on future actions`)         .getResponse();    },};

const BreakingAllianceHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest' && handlerInput.requestEnvelope.request.intent.name === 'BreakingAlliance';
    },
    handle(handlerInput) {
        return handlerInput.responseBuilder.speak('A power breaks its alliance when. It collapses or surrenders. It accepts an armistice and an ally does not. It fails to join a war along with its allies. Powers that are no longer allies remove their cubes from their alliance circle on the political display')
         .withShouldEndSession(false)          .withSimpleCard(`BreakingAlliance`,`A power breaks its alliance when. It collapses or surrenders. It accepts an armistice and an ally does not. It fails to join a war along with its allies. Powers that are no longer allies remove their cubes from their alliance circle on the political display`)         .getResponse();    },};

const DeclarationOfWarHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest' && handlerInput.requestEnvelope.request.intent.name === 'DeclarationOfWar';
    },
    handle(handlerInput) {
        return handlerInput.responseBuilder.speak('A power may play a ﬂag to attempt to declare war on one or more target powers. More than one power may be targeted only if they are allied with each other. A declaration of war is not required to attack an ungarrisoned country . To declare war, a power must have a commitment of mobilization or total war. The United States and its allies may not declare war against Japan if the US-Japan Trade marker is in play')
         .withShouldEndSession(false)          .withSimpleCard(`DeclarationOfWar`,`A power may play a ﬂag to attempt to declare war on one or more target powers. More than one power may be targeted only if they are allied with each other. A declaration of war is not required to attack an ungarrisoned country . To declare war, a power must have a commitment of mobilization or total war. The United States and its allies may not declare war against Japan if the US-Japan Trade marker is in play`)         .getResponse();    },};

const DiplomacyHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest' && handlerInput.requestEnvelope.request.intent.name === 'Diplomacy';
    },
    handle(handlerInput) {
        return handlerInput.responseBuilder.speak('A power may play a ﬂag to attempt to gain control of an ungarrisoned country by diplomacy. The power designates a single ungarrisoned country in their interests as the target. The target may be controlled by another power , or be a home or colony area with a neutral cube, but cannot be in an active civil war')
         .withShouldEndSession(false)          .withSimpleCard(`Diplomacy`,`A power may play a ﬂag to attempt to gain control of an ungarrisoned country by diplomacy. The power designates a single ungarrisoned country in their interests as the target. The target may be controlled by another power , or be a home or colony area with a neutral cube, but cannot be in an active civil war`)         .getResponse();    },};

const IncreaseCommitmentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest' && handlerInput.requestEnvelope.request.intent.name === 'IncreaseCommitment';
    },
    handle(handlerInput) {
        return handlerInput.responseBuilder.speak('A power may play a ﬂag to attempt to increase its commitment. If the power is belligerent the effectiveness check is automatically successful.  If successful, move the power’s Commitment marker one column to the right on its status card. A power may never voluntarily increase commitment to exhaustion. A power cannot successfully increase its commitment more than once per turn; ﬂip the commitment markerwhen it is increased as a reminder')
         .withShouldEndSession(false)          .withSimpleCard(`IncreaseCommitment`,`A power may play a ﬂag to attempt to increase its commitment. If the power is belligerent the effectiveness check is automatically successful.  If successful, move the power’s Commitment marker one column to the right on its status card. A power may never voluntarily increase commitment to exhaustion. A power cannot successfully increase its commitment more than once per turn; ﬂip the commitment markerwhen it is increased as a reminder`)         .getResponse();    },};

const ManeuversHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest' && handlerInput.requestEnvelope.request.intent.name === 'Maneuvers';
    },
    handle(handlerInput) {
        return handlerInput.responseBuilder.speak('A power may play a ﬂag to attempt to perform one military action (8.0). If the effectiveness check is successful, the power designates and performs a single military action.')
         .withShouldEndSession(false)          .withSimpleCard(`Maneuvers`,`A power may play a ﬂag to attempt to perform one military action (8.0). If the effectiveness check is successful, the power designates and performs a single military action.`)         .getResponse();    },};

const PropagandaHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest' && handlerInput.requestEnvelope.request.intent.name === 'Propaganda';
    },
    handle(handlerInput) {
        return handlerInput.responseBuilder.speak('A power may play a ﬂag to attempt to increase its stability (5.5). If the effectiveness check is successful, increase the power’s stability one level (but never beyond steady)')
         .withShouldEndSession(false)          .withSimpleCard(`Propaganda`,`A power may play a ﬂag to attempt to increase its stability (5.5). If the effectiveness check is successful, increase the power’s stability one level (but never beyond steady)`)         .getResponse();    },};

const OccupationLimitsHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest' && handlerInput.requestEnvelope.request.intent.name === 'OccupationLimits';
    },
    handle(handlerInput) {
        return handlerInput.responseBuilder.speak('Occupation limits apply separately for each ideology. This limit may only be exceeded when playing a unit at a production site, or during movement, whether during a deployment action or operation. If the occupation limit is exceeded at any other time, the violating power must destroy excess units and return them to its force pool')
         .withShouldEndSession(false)          .withSimpleCard(`OccupationLimits`,`Occupation limits apply separately for each ideology. This limit may only be exceeded when playing a unit at a production site, or during movement, whether during a deployment action or operation. If the occupation limit is exceeded at any other time, the violating power must destroy excess units and return them to its force pool`)         .getResponse();    },};

const LogisticsUnitsHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest' && handlerInput.requestEnvelope.request.intent.name === 'LogisticsUnits';
    },
    handle(handlerInput) {
        return handlerInput.responseBuilder.speak('A logistics unit represents a concentration of facilities and material strength. It negates the effects of restricted terrain in its area. Logistics units are limited to one per area. In a sea area with an air base it increases the occupation limit to two air units. In a sea area with a naval base, it increases the occupation limit to two naval units')
         .withShouldEndSession(false)          .withSimpleCard(`LogisticsUnits`,`A logistics unit represents a concentration of facilities and material strength. It negates the effects of restricted terrain in its area. Logistics units are limited to one per area. In a sea area with an air base it increases the occupation limit to two air units. In a sea area with a naval base, it increases the occupation limit to two naval units`)         .getResponse();    },};

const MovementHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest' && handlerInput.requestEnvelope.request.intent.name === 'Movement';
    },
    handle(handlerInput) {
        return handlerInput.responseBuilder.speak('Different types of units use different types of movement depending on the circumstances.  Land units may always use land movement. Fortress units may only move when played from the action cup or reserve. Naval units always use naval movement. Air units may always use air movement. Logistics units may only move when played from the action cup or reserve.')
         .withShouldEndSession(false)          .withSimpleCard(`Movement`,`Different types of units use different types of movement depending on the circumstances.  Land units may always use land movement. Fortress units may only move when played from the action cup or reserve. Naval units always use naval movement. Air units may always use air movement. Logistics units may only move when played from the action cup or reserve.`)         .getResponse();    },};

const LandMovementHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest' && handlerInput.requestEnvelope.request.intent.name === 'LandMovement';
    },
    handle(handlerInput) {
        return handlerInput.responseBuilder.speak('Land movement is allowed from a land or mixed area to an adjacent land or mixed area. Land movement is allowed across black crossing arrows  and white map cconnectors , including half-white connectors')
         .withShouldEndSession(false)          .withSimpleCard(`LandMovement`,`Land movement is allowed from a land or mixed area to an adjacent land or mixed area. Land movement is allowed across black crossing arrows  and white map cconnectors , including half-white connectors`)         .getResponse();    },};

const NavalMovementHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest' && handlerInput.requestEnvelope.request.intent.name === 'NavalMovement';
    },
    handle(handlerInput) {
        return handlerInput.responseBuilder.speak('Naval movement is allowed from a sea area to an adjacent sea or coastal area, or from a coastal area to an adjacent sea area. Naval movement is also allowed between a mixed area and an adjacent coastal area, but only if they are connected by a black crossing arrow')
         .withShouldEndSession(false)          .withSimpleCard(`NavalMovement`,`Naval movement is allowed from a sea area to an adjacent sea or coastal area, or from a coastal area to an adjacent sea area. Naval movement is also allowed between a mixed area and an adjacent coastal area, but only if they are connected by a black crossing arrow`)         .getResponse();    },};

const AirMovementHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest' && handlerInput.requestEnvelope.request.intent.name === 'AirMovement';
    },
    handle(handlerInput) {
        return handlerInput.responseBuilder.speak('Air movement is from area to adjacent area, regardless of area type. Air movement may enter any sea areas, friendly land or mixed areas, or enemy land or mixed areas. Air movement is allowed across black or blue crossing arrows  and white map connectors, including half-white connectors.')
         .withShouldEndSession(false)          .withSimpleCard(`AirMovement`,`Air movement is from area to adjacent area, regardless of area type. Air movement may enter any sea areas, friendly land or mixed areas, or enemy land or mixed areas. Air movement is allowed across black or blue crossing arrows  and white map connectors, including half-white connectors.`)         .getResponse();    },};

const NavalRangeHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest' && handlerInput.requestEnvelope.request.intent.name === 'NavalRange';
    },
    handle(handlerInput) {
        return handlerInput.responseBuilder.speak('7.3.1 Naval Range The range of a unit using naval movement is two sea or mixed areas from a friendly port.')
         .withShouldEndSession(false)          .withSimpleCard(`NavalRange`,`7.3.1 Naval Range The range of a unit using naval movement is two sea or mixed areas from a friendly port.`)         .getResponse();    },};

const AirRangeHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest' && handlerInput.requestEnvelope.request.intent.name === 'AirRange';
    },
    handle(handlerInput) {
        return handlerInput.responseBuilder.speak('The range of a tactical air force is one area from a friendly airfeld. The range of a strategic air force is two areas from a friendly airfeld.')
         .withShouldEndSession(false)          .withSimpleCard(`AirRange`,`The range of a tactical air force is one area from a friendly airfeld. The range of a strategic air force is two areas from a friendly airfeld.`)         .getResponse();    },};

const ExtendedRangeHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest' && handlerInput.requestEnvelope.request.intent.name === 'ExtendedRange';
    },
    handle(handlerInput) {
        return handlerInput.responseBuilder.speak('At the start of an operation, the range of activated air and/or naval units may be extended one area by declaring extended range and accepting a –1 penalty to combat scores involving extended range units during the operation. Extended range would also apply to retreat or regroup by designated units')
         .withShouldEndSession(false)          .withSimpleCard(`ExtendedRange`,`At the start of an operation, the range of activated air and/or naval units may be extended one area by declaring extended range and accepting a –1 penalty to combat scores involving extended range units during the operation. Extended range would also apply to retreat or regroup by designated units`)         .getResponse();    },};

const MilitaryActionsHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest' && handlerInput.requestEnvelope.request.intent.name === 'MilitaryActions';
    },
    handle(handlerInput) {
        return handlerInput.responseBuilder.speak('A military action allows a power to move and attack with their forces on the board, among other related activities. A power performs one or more military actions when it plays an offensive. A power performs a single military action when it succeeds with a maneuvers or declaration of war political action. A power performs a deployment military action when its Home Front marker is drawn, or when playing a unit')
         .withShouldEndSession(false)          .withSimpleCard(`MilitaryActions`,`A military action allows a power to move and attack with their forces on the board, among other related activities. A power performs one or more military actions when it plays an offensive. A power performs a single military action when it succeeds with a maneuvers or declaration of war political action. A power performs a deployment military action when its Home Front marker is drawn, or when playing a unit`)         .getResponse();    },};

const BuildsHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest' && handlerInput.requestEnvelope.request.intent.name === 'Builds';
    },
    handle(handlerInput) {
        return handlerInput.responseBuilder.speak('A belligerent power (1.1) may spend one or more military actions to generate an equal number of builds (8.3). The power must use the builds immediately and can construct any eligible unit in its force pool.')
         .withShouldEndSession(false)          .withSimpleCard(`Builds`,`A belligerent power (1.1) may spend one or more military actions to generate an equal number of builds (8.3). The power must use the builds immediately and can construct any eligible unit in its force pool.`)         .getResponse();    },};

const DeploymentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest' && handlerInput.requestEnvelope.request.intent.name === 'Deployment';
    },
    handle(handlerInput) {
        return handlerInput.responseBuilder.speak('A deployment action allows a power to move some or all of its units an unlimited number of times. Allied units may not be moved by deployment. Deploying units move one at a time, area by area. A power may move one unit, move another unit, and then go back and move the frst unit again. There is no limit to how far a deploying unit may move')
         .withShouldEndSession(false)          .withSimpleCard(`Deployment`,`A deployment action allows a power to move some or all of its units an unlimited number of times. Allied units may not be moved by deployment. Deploying units move one at a time, area by area. A power may move one unit, move another unit, and then go back and move the frst unit again. There is no limit to how far a deploying unit may move`)         .getResponse();    },};

const SubsequentActivationHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest' && handlerInput.requestEnvelope.request.intent.name === 'SubsequentActivation';
    },
    handle(handlerInput) {
        return handlerInput.responseBuilder.speak('Units that deploy may not be activated for an operation later in the same offensive. However, units that activate for an operation may later deploy in the same offensive')
         .withShouldEndSession(false)          .withSimpleCard(`SubsequentActivation`,`Units that deploy may not be activated for an operation later in the same offensive. However, units that activate for an operation may later deploy in the same offensive`)         .getResponse();    },};

const OperationTypesHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest' && handlerInput.requestEnvelope.request.intent.name === 'OperationTypes';
    },
    handle(handlerInput) {
        return handlerInput.responseBuilder.speak('Land operations attack a land or mixed area, either adjacent, or across one or two sea or mixed areas. Naval operations  attack an area containing naval units and/or a base .  Air operations attack an area containing air units and/or a resource.')
         .withShouldEndSession(false)          .withSimpleCard(`OperationTypes`,`Land operations attack a land or mixed area, either adjacent, or across one or two sea or mixed areas. Naval operations  attack an area containing naval units and/or a base .  Air operations attack an area containing air units and/or a resource.`)         .getResponse();    },};

const OperationSequenceHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest' && handlerInput.requestEnvelope.request.intent.name === 'OperationSequence';
    },
    handle(handlerInput) {
        return handlerInput.responseBuilder.speak('The attacker declares operation type, units, target area. The attacker declares any augmentation for the operation. Each power provoked by the attack gains a ﬂag. Attacking and defending units must trace an LOC for supply. Attacking units move to the target area. Resolve combat.')
         .withShouldEndSession(false)          .withSimpleCard(`OperationSequence`,`The attacker declares operation type, units, target area. The attacker declares any augmentation for the operation. Each power provoked by the attack gains a ﬂag. Attacking and defending units must trace an LOC for supply. Attacking units move to the target area. Resolve combat.`)         .getResponse();    },};

const LandOperationProcedureHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest' && handlerInput.requestEnvelope.request.intent.name === 'LandOperationProcedure';
    },
    handle(handlerInput) {
        return handlerInput.responseBuilder.speak('A power performs a land operation by spending a military action to activate one or more friendly armies to attack an adjacent enemy land or mixed area or uncontrolled country. The activated armies move to the target area and initiate land combat (10.4). Air units may support.')
         .withShouldEndSession(false)          .withSimpleCard(`LandOperationProcedure`,`A power performs a land operation by spending a military action to activate one or more friendly armies to attack an adjacent enemy land or mixed area or uncontrolled country. The activated armies move to the target area and initiate land combat (10.4). Air units may support.`)         .getResponse();    },};

const NavalOperationProcedureHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest' && handlerInput.requestEnvelope.request.intent.name === 'NavalOperationProcedure';
    },
    handle(handlerInput) {
        return handlerInput.responseBuilder.speak('A power performs a naval operation by spending a military action to activate one or more friendly ﬂeets and/or strategic air forces to attack an area. The activated units must occupy a friendly port or airfeld')
         .withShouldEndSession(false)          .withSimpleCard(`NavalOperationProcedure`,`A power performs a naval operation by spending a military action to activate one or more friendly ﬂeets and/or strategic air forces to attack an area. The activated units must occupy a friendly port or airfeld`)         .getResponse();    },};

const AirOperationProcedureHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest' && handlerInput.requestEnvelope.request.intent.name === 'AirOperationProcedure';
    },
    handle(handlerInput) {
        return handlerInput.responseBuilder.speak('A power performs an air operation by spending a military action to activate one or more air units to attack an area. The activating power designates the target area, which must contain at least one enemy air unit. The area must be within range of all activated units.')
         .withShouldEndSession(false)          .withSimpleCard(`AirOperationProcedure`,`A power performs an air operation by spending a military action to activate one or more air units to attack an area. The activating power designates the target area, which must contain at least one enemy air unit. The area must be within range of all activated units.`)         .getResponse();    },};

const StrategicBombingHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest' && handlerInput.requestEnvelope.request.intent.name === 'StrategicBombing';
    },
    handle(handlerInput) {
        return handlerInput.responseBuilder.speak('A strategic bombing air operation may be declared against an enemy area containing a resource; the area need not contain an enemy air unit. At least one strategic air force must be among the activated units. Resolve the strategic bombing operation as an air combat. If there are no defending air units, the defender still rolls one die for intrinsic air defense, but cannot declare a retreat.')
         .withShouldEndSession(false)          .withSimpleCard(`StrategicBombing`,`A strategic bombing air operation may be declared against an enemy area containing a resource; the area need not contain an enemy air unit. At least one strategic air force must be among the activated units. Resolve the strategic bombing operation as an air combat. If there are no defending air units, the defender still rolls one die for intrinsic air defense, but cannot declare a retreat.`)         .getResponse();    },};

const SupplyHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest' && handlerInput.requestEnvelope.request.intent.name === 'Supply';
    },
    handle(handlerInput) {
        return handlerInput.responseBuilder.speak('Before units move as part of an operation,each area containing activated or defending units must trace a line of communications, LOC, for supply. If an LOC cannot be traced, place a Limited Supply marker on the affected units for the duration of the operation. Units with a Limited Supply marker apply a –1 penalty to their combat score')
         .withShouldEndSession(false)          .withSimpleCard(`Supply`,`Before units move as part of an operation,each area containing activated or defending units must trace a line of communications, LOC, for supply. If an LOC cannot be traced, place a Limited Supply marker on the affected units for the duration of the operation. Units with a Limited Supply marker apply a –1 penalty to their combat score`)         .getResponse();    },};

const AttackingACountryHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest' && handlerInput.requestEnvelope.request.intent.name === 'AttackingACountry';
    },
    handle(handlerInput) {
        return handlerInput.responseBuilder.speak('A power may attack a garrisoned country only if it is controlled by an enemy power. A Fascist or Communist power may attack an ungarrisoned country whether it is controlled or not. No declaration of war or surprise attack occurs—the Fascist or Communist power simply declares an operation against the country.')
         .withShouldEndSession(false)          .withSimpleCard(`AttackingACountry`,`A power may attack a garrisoned country only if it is controlled by an enemy power. A Fascist or Communist power may attack an ungarrisoned country whether it is controlled or not. No declaration of war or surprise attack occurs—the Fascist or Communist power simply declares an operation against the country.`)         .getResponse();    },};

const CivilWarsHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest' && handlerInput.requestEnvelope.request.intent.name === 'CivilWars';
    },
    handle(handlerInput) {
        return handlerInput.responseBuilder.speak('A Civil War marker has no effect on whether a country can be attacked. Remove the Civil War marker and any aid if a power takes control of the country. When a country with a Civil War marker is attacked, one aid marker from each faction is spent and returned to its available markers box. If any aid is spent, the country rolls an additional die for defense (not one per aid).')
         .withShouldEndSession(false)          .withSimpleCard(`CivilWars`,`A Civil War marker has no effect on whether a country can be attacked. Remove the Civil War marker and any aid if a power takes control of the country. When a country with a Civil War marker is attacked, one aid marker from each faction is spent and returned to its available markers box. If any aid is spent, the country rolls an additional die for defense (not one per aid).`)         .getResponse();    },};

const FailedAttacksHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest' && handlerInput.requestEnvelope.request.intent.name === 'FailedAttacks';
    },
    handle(handlerInput) {
        return handlerInput.responseBuilder.speak('If a power attacks an uncontrolled country but fails to take control of it by the end of the operation, immediately resolve a diplomatic opportunity (5.7) for the country')
         .withShouldEndSession(false)          .withSimpleCard(`FailedAttacks`,`If a power attacks an uncontrolled country but fails to take control of it by the end of the operation, immediately resolve a diplomatic opportunity (5.7) for the country`)         .getResponse();    },};

const SurpriseAttackHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest' && handlerInput.requestEnvelope.request.intent.name === 'SurpriseAttack';
    },
    handle(handlerInput) {
        return handlerInput.responseBuilder.speak('A surprise attack is an operation that creates a state of war. It requires neither a political action nor an effectiveness check. Only Fascist powers can perform a surprise attack. To perform a surprise attack, a Fascist power with a commitment of mobilization or total war spends a military action to attack a non-enemy opposing power')
         .withShouldEndSession(false)          .withSimpleCard(`SurpriseAttack`,`A surprise attack is an operation that creates a state of war. It requires neither a political action nor an effectiveness check. Only Fascist powers can perform a surprise attack. To perform a surprise attack, a Fascist power with a commitment of mobilization or total war spends a military action to attack a non-enemy opposing power`)         .getResponse();    },};

const CombatSequenceHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest' && handlerInput.requestEnvelope.request.intent.name === 'CombatSequence';
    },
    handle(handlerInput) {
        return handlerInput.responseBuilder.speak('All combat is resolved according to the following sequence: Commit all supporting units, attacker first. Resolve air combat, if any. If the main combat is a land or naval combat, determine air superiority. Resolve land or naval combat, if any. Resolve the aftermath; remaining units retreat or regroup')
         .withShouldEndSession(false)          .withSimpleCard(`CombatSequence`,`All combat is resolved according to the following sequence: Commit all supporting units, attacker first. Resolve air combat, if any. If the main combat is a land or naval combat, determine air superiority. Resolve land or naval combat, if any. Resolve the aftermath; remaining units retreat or regroup`)         .getResponse();    },};

const AirSuperiorityHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest' && handlerInput.requestEnvelope.request.intent.name === 'AirSuperiority';
    },
    handle(handlerInput) {
        return handlerInput.responseBuilder.speak('Air superiority is determined during the resolution of a land or naval combat. An air combat is resolved and whichever side has more air units remaining has air superiority. If only one side has air units present, they automatically have air superiority. If both sides have the same number of supporting air units, neither side gets air superiority.')
         .withShouldEndSession(false)          .withSimpleCard(`AirSuperiority`,`Air superiority is determined during the resolution of a land or naval combat. An air combat is resolved and whichever side has more air units remaining has air superiority. If only one side has air units present, they automatically have air superiority. If both sides have the same number of supporting air units, neither side gets air superiority.`)         .getResponse();    },};

const LandCombatHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest' && handlerInput.requestEnvelope.request.intent.name === 'LandCombat';
    },
    handle(handlerInput) {
        return handlerInput.responseBuilder.speak('Section 10.4. Land combat occurs as a result of a land operation (9.3). Only land units suffer losses in land combat')
         .withShouldEndSession(false)          .withSimpleCard(`LandCombat`,`Section 10.4. Land combat occurs as a result of a land operation (9.3). Only land units suffer losses in land combat`)         .getResponse();    },};

const NavalCombatHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest' && handlerInput.requestEnvelope.request.intent.name === 'NavalCombat';
    },
    handle(handlerInput) {
        return handlerInput.responseBuilder.speak('Section 10.5. Naval combat may occur as a result of a naval operation (9.4). Only naval units suffer losses in naval combat')
         .withShouldEndSession(false)          .withSimpleCard(`NavalCombat`,`Section 10.5. Naval combat may occur as a result of a naval operation (9.4). Only naval units suffer losses in naval combat`)         .getResponse();    },};

const AirCombatHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest' && handlerInput.requestEnvelope.request.intent.name === 'AirCombat';
    },
    handle(handlerInput) {
        return handlerInput.responseBuilder.speak('Resolve air combat as follows: Each side rolls two dice. During strategic bombing, a defender with no air units rolls one die. Calculate bonuses and/or penalties to each side’s combat score. Both sides roll and determine the results of the combat (10.7).')
         .withShouldEndSession(false)          .withSimpleCard(`AirCombat`,`Resolve air combat as follows: Each side rolls two dice. During strategic bombing, a defender with no air units rolls one die. Calculate bonuses and/or penalties to each side’s combat score. Both sides roll and determine the results of the combat (10.7).`)         .getResponse();    },};

const CombatResultHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest' && handlerInput.requestEnvelope.request.intent.name === 'CombatResult';
    },
    handle(handlerInput) {
        return handlerInput.responseBuilder.speak('The side with the higher combat score wins the combat, and the loser incurs losses and/or retreats. If the fnal scores are tied, neither side wins; both sides take one loss and cannot retreat. The side that loses the combat must take a number of losses equal to the winner’s score divided by the loser’s score')
         .withShouldEndSession(false)          .withSimpleCard(`CombatResult`,`The side with the higher combat score wins the combat, and the loser incurs losses and/or retreats. If the fnal scores are tied, neither side wins; both sides take one loss and cannot retreat. The side that loses the combat must take a number of losses equal to the winner’s score divided by the loser’s score`)         .getResponse();    },};

const LossesHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest' && handlerInput.requestEnvelope.request.intent.name === 'Losses';
    },
    handle(handlerInput) {
        return handlerInput.responseBuilder.speak('For each loss suffered by a side in combat, an upgraded unit is ﬂipped to its non-upgraded side or a non-upgraded unit is destroyed and returned to its owner’s force pool. The same unit can take multiple losses in a single combat, i.e., an upgraded unit can be ﬂipped, and then destroyed, to satisfy two losses')
         .withShouldEndSession(false)          .withSimpleCard(`Losses`,`For each loss suffered by a side in combat, an upgraded unit is ﬂipped to its non-upgraded side or a non-upgraded unit is destroyed and returned to its owner’s force pool. The same unit can take multiple losses in a single combat, i.e., an upgraded unit can be ﬂipped, and then destroyed, to satisfy two losses`)         .getResponse();    },};

const RetreatHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest' && handlerInput.requestEnvelope.request.intent.name === 'Retreat';
    },
    handle(handlerInput) {
        return handlerInput.responseBuilder.speak('The losing side of a combat may choose to reduce its losses by one by declaring a voluntary retreat; this may reduce losses to zero (10.8). A retreat may not be declared if the combat result is a tie, or if the remaining losses would still be enough to eliminate all units eligible for losses.')
         .withShouldEndSession(false)          .withSimpleCard(`Retreat`,`The losing side of a combat may choose to reduce its losses by one by declaring a voluntary retreat; this may reduce losses to zero (10.8). A retreat may not be declared if the combat result is a tie, or if the remaining losses would still be enough to eliminate all units eligible for losses.`)         .getResponse();    },};

const RegroupHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest' && handlerInput.requestEnvelope.request.intent.name === 'Regroup';
    },
    handle(handlerInput) {
        return handlerInput.responseBuilder.speak('Regroup allows units to reposition after combat. even units that were not involved. All eligible units belonging to powers on the regrouping side may regroup: land units after land combat, naval units after naval combat, and air units after any combat. Regrouping does not cost actions, nor does it activate the units involved. All rules of movement apply. At the end of regroup, occupation limits must be obeyed in all affected areas.')
         .withShouldEndSession(false)          .withSimpleCard(`Regroup`,`Regroup allows units to reposition after combat. even units that were not involved. All eligible units belonging to powers on the regrouping side may regroup: land units after land combat, naval units after naval combat, and air units after any combat. Regrouping does not cost actions, nor does it activate the units involved. All rules of movement apply. At the end of regroup, occupation limits must be obeyed in all affected areas.`)         .getResponse();    },};

const CivilWarCrisisHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest' && handlerInput.requestEnvelope.request.intent.name === 'CivilWarCrisis';
    },
    handle(handlerInput) {
        return handlerInput.responseBuilder.speak('When a Civil War or Colonial Revolt crisis event occurs, the player who drew the crisis marker rolls two dice and consults the table in the event listing. The result designates an area where a civil war has broken out')
         .withShouldEndSession(false)          .withSimpleCard(`CivilWarCrisis`,`When a Civil War or Colonial Revolt crisis event occurs, the player who drew the crisis marker rolls two dice and consults the table in the event listing. The result designates an area where a civil war has broken out`)         .getResponse();    },};

const CivilWarResolutionHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest' && handlerInput.requestEnvelope.request.intent.name === 'CivilWarResolution';
    },
    handle(handlerInput) {
        return handlerInput.responseBuilder.speak('When the Civil War Resolution marker is drawn from the action cup, resolve one round of civil war combat immediately in all areas marked with a Civil War marker. The player who drew the marker determines the order of resolution. After resolving all combats, place the Resolution marker on the turn track to enter the action cup at the start of the next turn')
         .withShouldEndSession(false)          .withSimpleCard(`CivilWarResolution`,`When the Civil War Resolution marker is drawn from the action cup, resolve one round of civil war combat immediately in all areas marked with a Civil War marker. The player who drew the marker determines the order of resolution. After resolving all combats, place the Resolution marker on the turn track to enter the action cup at the start of the next turn`)         .getResponse();    },};

const ChineseCivilWarHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest' && handlerInput.requestEnvelope.request.intent.name === 'ChineseCivilWar';
    },
    handle(handlerInput) {
        return handlerInput.responseBuilder.speak('China begins the game in a state of civil war. Each area in China is an individual country. Resolve the Chinese civil war along with any others whenever the Civil War Resolution chit is drawn from the action cup.')
         .withShouldEndSession(false)          .withSimpleCard(`ChineseCivilWar`,`China begins the game in a state of civil war. Each area in China is an individual country. Resolve the Chinese civil war along with any others whenever the Civil War Resolution chit is drawn from the action cup.`)         .getResponse();    },};


// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=  END GENERIC TEXT HANDLING =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const DiceRollHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest' && handlerInput.requestEnvelope.request.intent.name === 'DiceRoll';
    },
    handle(handlerInput) {

        const dice = handlerInput.requestEnvelope.request.intent.slots.dice.value;
        let responseString = `<speak> <audio src="soundbank://soundlibrary/office/amzn_sfx_typing_short_02"/>
    You rolled ` + dice.toString() + ` dice. `;
        var diceResult = 0;
        for (var i = 0; i < parseInt(dice); i++){
            const diceRoll = Math.floor(Math.random() * 6) + 1;
            if (diceRoll > diceResult) diceResult = diceRoll;
            responseString = responseString + diceRoll.toString() + ' <break time="300ms"/> ';
        }
        responseString = responseString + ' highest number is ' + diceResult + ' </speak>';

        return handlerInput.responseBuilder
            .speak(responseString)
            .withShouldEndSession(false)
            .getResponse();
    },
};

const LaunchRequestHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'LaunchRequest';
    },
    handle(handlerInput) {
        return handlerInput.responseBuilder
            .speak(`Welcome to Cataclysm Helper`)
            .withShouldEndSession(false)
            .getResponse();
    },
};

const HelpIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest' &&
            handlerInput.requestEnvelope.request.intent.name === 'AMAZON.HelpIntent';
    },
    handle(handlerInput) {

        return handlerInput.responseBuilder
            .speak('Say any question from the game, for example: How Many Spaces Can My Naval Units Move.')
            .withShouldEndSession(false)
            .getResponse();
    },
};

const CancelAndStopIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest' &&
            (handlerInput.requestEnvelope.request.intent.name === 'AMAZON.CancelIntent' ||
                handlerInput.requestEnvelope.request.intent.name === 'AMAZON.StopIntent');
    },
    handle(handlerInput) {
        const speechText = 'Goodbye!';

        return handlerInput.responseBuilder
            .speak(speechText)
            .getResponse();
    },
};

const SessionEndedRequestHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'SessionEndedRequest';
    },
    handle(handlerInput) {
        console.log(`Session ended with reason: ${handlerInput.requestEnvelope.request.reason}`);
        return handlerInput.responseBuilder.getResponse();
    },
};

const ErrorHandler = {
    canHandle() {
        return true;
    },
    handle(handlerInput, error) {
        console.log(`Error handled: ${error.message}`);

        return handlerInput.responseBuilder
            .speak('')
            .withShouldEndSession(false)
            .getResponse();
    },
};

const skillBuilder = Alexa.SkillBuilders.custom();

exports.handler = skillBuilder
    .addRequestHandlers(
        LaunchRequestHandler,
        DiceRollHandler,

        IdeologyHandler,
DemocraticPowersHandler,
FascistPowersHandler,
CommunistPowerHandler,
NegotiationsHandler,
EndingGameHandler,
WinningTheGameHandler,
MapsHandler,
LandAreaHandler,
SeaAreaHandler,
MixedAreaHandler,
CoastalAreasHandler,
PortsHandler,
AirfeldHandler,
HomeAreasColoniesHandler,
AreaControlHandler,
CountryControlHandler,
ChinaHandler,
OffMapAreasHandler,
RemoteAreasHandler,
AdverseTerrainHandler,
BasesHandler,
BlackArrowsHandler,
BlueArrowHandler,
DelayBoxesHandler,
MapConnectorsHandler,
ResistanceRedFistHandler,
NaturalResourceHandler,
IndustrialResourcesHandler,
LimitedResourceHandler,
SpecialResourcesHandler,
ProductionSitesHandler,
RestrictedTerrainHandler,
CubesHandler,
PowerMarkersHandler,
MinorArmiesHandler,
NeutralCubesHandler,
ReserveTrackHandler,
FailedPoliticalActionHandler,
PoliticalDisplayHandler,
StabilityTrackHandler,
TurnTrackHandler,
VictoryPointTrackHandler,
PowerStatusCardHandler,
ActionCupHandler,
OrderOfPlayHandler,
AdministrationPhaseHandler,
GainFlagsHandler,
ProductionHandler,
ActionPhaseHandler,
ReserveHandler,
InterruptsHandler,
ResolvingFlagHandler,
ResolvingUnitHandler,
ResolvingUpgradeHandler,
SuddenDeathHandler,
HomeFrontHandler,
CommitmentHandler,
ExhaustionHandler,
ForcePoolHandler,
ProductionSequenceHandler,
LineOfCommunicationsHandler,
TransferResourcesHandler,
CollectingResourcesHandler,
ConvertResourcesHandler,
ConstructionHandler,
WarOffensivesHandler,
GainingFlagsHandler,
ProvocationHandler,
EffectivenessHandler,
FailedPoliticalActionsHandler,
StabilityHandler,
StabilityTestsHandler,
CollapseHandler,
CollapseProcedureHandler,
SurrenderHandler,
StartingWarsHandler,
EndingWarsHandler,
WarStatusHandler,
LimitedWarHandler,
GlobalWarHandler,
DiplomaticOpportunityHandler,
JoiningAllianceHandler,
PoliticalActionHandler,
BreakingAllianceHandler,
DeclarationOfWarHandler,
DiplomacyHandler,
IncreaseCommitmentHandler,
ManeuversHandler,
PropagandaHandler,
OccupationLimitsHandler,
LogisticsUnitsHandler,
MovementHandler,
LandMovementHandler,
NavalMovementHandler,
AirMovementHandler,
NavalRangeHandler,
AirRangeHandler,
ExtendedRangeHandler,
MilitaryActionsHandler,
BuildsHandler,
DeploymentHandler,
SubsequentActivationHandler,
OperationTypesHandler,
OperationSequenceHandler,
LandOperationProcedureHandler,
NavalOperationProcedureHandler,
AirOperationProcedureHandler,
StrategicBombingHandler,
SupplyHandler,
AttackingACountryHandler,
CivilWarsHandler,
FailedAttacksHandler,
SurpriseAttackHandler,
CombatSequenceHandler,
AirSuperiorityHandler,
LandCombatHandler,
NavalCombatHandler,
AirCombatHandler,
CombatResultHandler,
LossesHandler,
RetreatHandler,
RegroupHandler,
CivilWarCrisisHandler,
CivilWarResolutionHandler,
ChineseCivilWarHandler,


        HelpIntentHandler,
        CancelAndStopIntentHandler,
        SessionEndedRequestHandler
    )
    .addErrorHandlers(ErrorHandler)
    .lambda();

