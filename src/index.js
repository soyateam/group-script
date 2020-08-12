const CronJob = require('cron').CronJob;

const kartoffel = require('./kartoffel/kartoffel.service');
const config = require('./config');
const logger = require('./utils/logger');

function findCommonElement(array1, array2) {
    for (let i = 0; i < array1.length; i++) {
        for (let j = 0; j < array2.length; j++) {
            if (array1[i] === array2[j]) {
                return true;
            }
        }
    }
    return false;
}

function getMembersCounts(members) {
    const counts = {
        peopleSum: members.length,
        serviceType: {
            kevaSum: 0,
            hovaSum: 0,
        },
        rankType: {
            aSum: 0,
            bSum: 0,
            cSum: 0
        },
    };

    members.forEach(member => {
        switch (member.rank) {
            case ('mega'):
                counts.rankType.aSum++;
                break;
            case ('rookie'):
                counts.rankType.bSum++
                break;
            default:
                counts.rankType.cSum++;
                break;
        }
    });

    return counts;
}

function isGroupMador(groupID) {
    return config.madors.includes(groupID);
}

async function onCronStart() {
    try {
        logger.log('cron job starting now');

        const groups = await kartoffel.getAllHierarchy();
        groups.forEach(async (group) => {
            if (findCommonElement(config.madors, group.ancestors)) return;

            const isMador = isGroupMador();
            let members;
            // if (isMador) {
            members = await kartoffel.getAllMembers(group.id)
            // } else {
            //     members = await kartoffel.getDirectMembers();
            // }

            const counts = getMembersCounts(members);
            const groupBody = {
                ...counts,
                kartoffelID: group.id,
                ancestors: group.ancestors,
                parent: group.ancestors[0],
                children: group.children,
                name: group.name,
                isMador,
                assignedCount: 0,
                unitName: 'unit',
            }

            console.log(groupBody)
        });
    } catch (err) {
        logger.log(err, Error)

    }
}

// (() => {
//     const job = new CronJob('* * * * *', onCronStart, null, true, config.cron.timeZone);
//     job.start();
// })();

onCronStart()
