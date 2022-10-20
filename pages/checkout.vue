<script setup>
const router = useRouter();
const goBack = () => {
  router.back();
};
const products = [
  {
    image: "/assets/images/cart/image-xx99-mark-two-headphones.jpg",
    title: "XX99 MK II",
    price: "$2,999",
    quantity: "1",
  },
  {
    image: "/assets/images/cart/image-xx59-headphones.jpg",
    title: "XX59",
    price: "$899",
    quantity: "2",
  },
  {
    image: "/assets/images/cart/image-yx1-earphones.jpg",
    title: "YX1",
    price: "$599",
    quantity: "1",
  },
];
</script>
<template>
  <div class="bg-[#F2F2F2] pb-[97px]">
    <div class="container">
      <div
        class="inline-block text-[15px] leading-[25px] text-black opacity-50 py-6 font-medium xl:pt-[79px] xl:pb-[56px] cursor-pointer hover:text-[#D87D4A] hover:opacity-100 transition-all"
        @click="goBack()"
      >
        Go Back
      </div>

      <FormKit
        type="form"
        :actions="false"
        :config="{
          classes: {
            form: 'xl:flex xl:gap-x-[30px]',
            label:
              'text-black font-bold text-[12px] mb-[9px] tracking-[-0.21px] block',
            legend:
              'text-black font-bold text-[12px] mb-[9px] tracking-[-0.21px] block',
            input:
              'border border-[#CFCFCF] rounded-lg flex items-center h-14 px-6 text-[14px] tracking-[-0.25px] text-[#000028] font-bold max-w-full w-full mb-[25px] cursor-pointer hover:border-[#D87D4A] focus:border-[#D87D4A] transition-colors',
          },
        }"
      >
        <div class="bg-white rounded-lg p-6 mb-8 xl:flex-grow xl:mb-0">
          <h1
            class="text-black uppercase text-lg font-bold tracking-[1px] mb-8 md:text-[32px] md:leading-[36px] md:tracking-[1.14px]"
          >
            Checkout
          </h1>

          <h2
            class="uppercase text-[#D87D4A] text-[13px] leading-[25px] tracking-[0.93px] font-bold mb-4"
          >
            Billing Details
          </h2>
          <div class="md:grid md:grid-cols-2 md:gap-x-4">
            <FormKit
              type="text"
              name="name"
              label="Name"
              placeholder="Jane Doe"
              validation="required"
            />

            <FormKit
              type="email"
              name="email"
              label="Email Address"
              placeholder="jane@doe.com"
              validation="required"
            />

            <FormKit
              type="tel"
              name="phone"
              label="Phone Number"
              placeholder="+1 111-222-3333"
              validation="required"
            />
          </div>

          <h2
            class="uppercase text-[#D87D4A] text-[13px] leading-[25px] tracking-[0.93px] font-bold mb-4"
          >
            Shipping Info
          </h2>

          <FormKit
            type="text"
            name="address"
            label="Your Address"
            placeholder="One Street"
            validation="required"
          />

          <div class="md:grid md:grid-cols-2 md:gap-x-4">
            <FormKit
              type="text"
              name="zip"
              label="ZIP Code"
              placeholder="00000"
              validation="required"
            />

            <FormKit
              type="text"
              name="city"
              label="City"
              placeholder="New York"
              validation="required"
            />

            <FormKit
              type="text"
              name="country"
              label="Country"
              placeholder="United States"
              validation="required"
            />
          </div>

          <h2
            class="uppercase text-[#D87D4A] text-[13px] leading-[25px] tracking-[0.93px] font-bold mb-4"
          >
            Payment Details
          </h2>

          <FormKit
            type="radio"
            name="payment"
            label="Payment Method"
            :options="{
              eMoney: 'e-Money',
              cash: 'Cash on Delivery',
            }"
            :config="{
              classes: {
                fieldset: 'md:grid md:grid-cols-2 md:gap-x-4',
                legend:
                  'text-black font-bold text-[12px] mb-[9px] tracking-[-0.21px] block md:contents',
                label: 'text-black font-bold text-[14px] tracking-[-0.25px]',
                wrapper:
                  'flex items-center gap-x-4 border border-[#CFCFCF] rounded-lg h-14 px-6 max-w-full w-full mb-4 cursor-pointer hover:border-[#D87D4A] focus:border-[#D87D4A] transition-colors peer-checked:border-[#D87D4A]',
                outer: 'mb-2',
                input: 'peer',
              },
            }"
            validation="required"
          />

          <div class="md:grid md:grid-cols-2 md:gap-x-4">
            <FormKit
              type="text"
              name="eMoney"
              label="e-Money Number"
              placeholder="XXXXXXXXX"
              validation="required"
            />

            <FormKit
              type="text"
              name="emoneyPin"
              label="e-Money Pin"
              placeholder="XXXX"
              validation="required"
            />
          </div>
        </div>

        <div
          class="bg-white rounded-lg p-6 xl:flex-grow xl:max-w-[350px] xl:h-fit"
        >
          <h2
            class="text-black uppercase text-lg font-bold tracking-[1px] mb-8"
          >
            Summary
          </h2>
          <div
            v-for="product of products"
            class="flex items-center justify-between mb-4"
          >
            <div class="flex items-center gap-x-4">
              <img
                class="rounded-lg max-w-[64px]"
                :src="product.image"
                :alt="product.title"
              />
              <div class="flex flex-col">
                <strong class="text-[15px] leading-[25px]">{{
                  product.title
                }}</strong>
                <strong class="text-[14px] text-[#7f7f7f] leading-[25px]">{{
                  product.price
                }}</strong>
              </div>
            </div>
            <div
              class="text-[15px] text-[#7f7f7f] leading-[25px] self-start pt-[5px]"
            >
              <strong>x{{ product.quantity }}</strong>
            </div>
          </div>

          <div class="mt-8 mb-2 flex justify-between uppercase">
            <span class="text-[#7f7f7f]">Total</span>
            <strong class="text-[18px]">$5,396</strong>
          </div>

          <div class="flex mb-2 justify-between uppercase">
            <span class="text-[#7f7f7f]">Shipping</span>
            <strong class="text-[18px]">$50</strong>
          </div>

          <div class="flex mb-6 justify-between uppercase">
            <span class="text-[#7f7f7f]">VAT (Included)</span>
            <strong class="text-[18px]">$1,079</strong>
          </div>

          <div class="flex mb-8 justify-between uppercase">
            <span class="text-[#7f7f7f]">Grand Total</span>
            <strong class="text-[18px] text-[#D87D4A]">$5,446</strong>
          </div>

          <button
            type="submit"
            class="btn btn--primary w-full max-w-full tracking-[1px]"
          >
            Continue &amp; Pay
          </button>
        </div>
      </FormKit>
    </div>
  </div>
</template>
