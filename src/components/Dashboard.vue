<template>
    <div id="dashboardItems" class="mt-10 flex flex-row justify-center">
        <div class="flex flex-col w-1/4">
            <div id="projectStats" class="m-4 pt-8 card">
                <div class="p-8 flex flex-row justify-center">
                    <cld-image class="pt-2" publicId="flippinnotes/projectMoney.png" secure="true">
                        <cld-transformation width="50" crop="scale"/>
                    </cld-image>
                    <div class="mx-10 flex flex-col">
                        <div class="text-3xl text-purple-700">$65,000</div>
                        <div>in potential profit</div>
                    </div>
                </div>
            </div>
            <div id="projectMonthly" class="m-2 pt-2 card">
                <div class="p-4 flex flex-row justify-center">
                    <cld-image class="pt-2" publicId="flippinnotes/sortof.png" secure="true">
                        <cld-transformation width="50" crop="scale"/>
                    </cld-image>
                    <div class="mx-10 flex flex-col">
                        <div class="text-3xl text-orange-700">$15,000</div>
                        <div>Last Month</div>
                    </div>
                </div>
                <div class="p-4 flex flex-row justify-center">
                    <cld-image class="pt-2" publicId="flippinnotes/good.png" secure="true">
                        <cld-transformation width="50" crop="scale"/>
                    </cld-image>
                    <div class="mx-10 flex flex-col">
                        <div class="text-3xl text-green-700">$23,000</div>
                        <div>This Month</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex flex-col w-1/2 ">
            <div id="projectList" class="card">
                <div id="projectHeader" class="cardHeader">

                    <div class="p-4">
                        <cld-image publicId="flippinnotes/projects.png" secure="true">
                            <cld-transformation width="50" crop="scale"/>
                        </cld-image>
                    </div>
                    <span class="mt-4 p-2 mr-2 font-bold text-xl text-gray-600 ">
                       Project Status
                </span>

                </div>
                <div id="projectTable" class="dashTable">
                    <table class="w-full table-fixed">
                        <thead>
                        <tr>
                            <th class="w-1/2 px-4 py-2 border-b">Project</th>
                            <th class="w-1/4 px-4 py-2 border-b">Status</th>
                            <th class="w-1/4 px-4 py-2 border-b">Net Profit</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td class="tableRow">House on 32nd st</td>
                            <td class="tableRow">In Progress</td>
                            <td class="tableRow">$34,234</td>
                        </tr>
                        <tr>
                            <td class="tableRow">Dyer Apartments
                            </td>
                            <td class="tableRow">On Hold</td>
                            <td class="tableRow">$23,034</td>
                        </tr>
                        <tr>
                            <td class="tableRow">3489 Fort Smith Rd</td>
                            <td class="tableRow">Closing</td>
                            <td class="tableRow">$13,987</td>
                        </tr>
                        </tbody>
                    </table>
                </div>

            </div>
            <div id="recentExpenses" class="card">
                <div id="expensesHeader" class="cardHeader">
                    <div class=" p-4 ">
                        <cld-image publicId="flippinnotes/expenses.png" secure="true">
                            <cld-transformation width="65" crop="scale"/>
                        </cld-image>
                    </div>
                    <span class="mt-2 p-2 mr-2 font-bold text-xl text-gray-600">
                       Top Expenses
                </span>
                </div>
                <div id="expensesTable" class="dashTable">
                    <table class="w-full table-fixed">
                        <thead>
                        <tr>
                            <th class="w-1/2 px-4 py-2 border-b">Project</th>
                            <th class="w-1/4 px-4 py-2 border-b">Status</th>
                            <th class="w-1/4 px-4 py-2 border-b">Net Profit</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td class="tableRow">Dry Wall</td>
                            <td class="tableRow">finishing</td>
                            <td class="tableRow">$3,000</td>
                        </tr>
                        <tr>
                            <td class="tableRow">2 x 4 pine
                            </td>
                            <td class="tableRow">Construction</td>
                            <td class="tableRow">$2,034</td>
                        </tr>
                        <tr>
                            <td class="tableRow">Laminate Flooring</td>
                            <td class="tableRow">Finishing</td>
                            <td class="tableRow">$8,500</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div id="profitabilityChart">

            </div>
            <div id="openTaskItems">

            </div>
            <div id="alerts">

            </div>
        </div>

    </div>

</template>

<script>
    export default {
        name: "Dashboard"
    }
</script>

<style scoped>
    .card {
        @apply mx-4 mt-8 rounded-lg shadow-xl;
    }

    .tableRow {
        @apply border-b px-2 py-2 text-center;
    }

    .dashTable {
        @apply py-2;
    }

    .cardHeader {
        @apply mb-2 flex flex-row justify-between bg-gray-100 rounded-t-lg;
    }

</style>
ACORNtea17!#
