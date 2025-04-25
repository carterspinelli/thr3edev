import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { useTheme } from "@/hooks/use-theme";

interface PricingFeature {
  title: string;
  items: string[];
}

interface PricingCardProps {
  title: string;
  description: string;
  price: number;
  originalPrice?: number;
  priceSuffix?: string;
  features: PricingFeature[];
  buttonText?: string;
  onButtonClick?: () => void;
}

export function PricingCard({
  title,
  description,
  price,
  originalPrice,
  priceSuffix = " MXN",
  features,
  buttonText = "Get Started",
  onButtonClick,
}: PricingCardProps) {
  const { theme } = useTheme();
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
      },
    },
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <motion.section
      ref={containerRef}
      className="py-12 md:py-16"
      initial="hidden"
      animate={hasAnimated ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <Card className={`relative mx-auto w-full max-w-6xl overflow-hidden ${
        theme === 'dark' 
          ? 'bg-zinc-900 border border-zinc-800' 
          : 'bg-white border border-zinc-200'
      }`}>
        <div className="flex flex-col lg:flex-row">
          <motion.div
            className="flex flex-col justify-between p-6 lg:w-2/5 lg:p-10"
            variants={itemVariants}
          >
            <div>
              <CardHeader className="p-0">
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className={`text-3xl font-bold ${
                      theme === 'dark' ? 'text-white' : 'text-zinc-900'
                    }`}>{title}</CardTitle>
                    <CardDescription className={`mt-2 ${
                      theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'
                    }`}>{description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <motion.div className="mt-6 space-y-4" variants={itemVariants}>
                <div className="inline-flex items-baseline">
                  <span className={`text-3xl font-extrabold ${
                    theme === 'dark' ? 'text-[#0e62fe]' : 'text-[#0e62fe]'
                  }`}>${price.toLocaleString()}{priceSuffix}</span>
                  {originalPrice && (
                    <span className={`ml-2 text-xl line-through ${
                      theme === 'dark' ? 'text-zinc-500' : 'text-zinc-400'
                    }`}>
                      ${originalPrice}
                    </span>
                  )}
                </div>
              </motion.div>
            </div>
            <motion.div className="mt-8" variants={itemVariants}>
              <Button 
                variant="expandIcon" 
                size="lg"
                className="w-full bg-[#0e62fe] text-white"
                Icon={() => <ArrowRight className="h-4 w-4" />} 
                iconPlacement="right"
                onClick={onButtonClick}
              >
                {buttonText}
              </Button>
            </motion.div>
          </motion.div>
          <Separator className={`lg:my-6 lg:hidden ${
            theme === 'dark' ? 'bg-zinc-800' : 'bg-zinc-200'
          }`} />
          <motion.div
            className={`p-6 lg:w-3/5 lg:p-10 ${
              theme === 'dark' ? 'bg-zinc-800/50' : 'bg-zinc-100/50'
            }`}
            variants={itemVariants}
          >
            <div className="space-y-6">
              {features.map((feature, featureIndex) => (
                <div key={featureIndex}>
                  <h3 className={`mb-4 text-lg font-semibold ${
                    theme === 'dark' ? 'text-white' : 'text-zinc-900'
                  }`}>{feature.title}:</h3>
                  <ul className="grid grid-cols-1 gap-3 md:grid-cols-2">
                    {feature.items.map((item, index) => (
                      <motion.li
                        key={index}
                        className="flex items-center"
                        variants={listItemVariants}
                        custom={index + featureIndex * feature.items.length}
                      >
                        <div className="mr-2 h-5 w-5 rounded-full bg-[#0e62fe]/20 flex items-center justify-center flex-shrink-0">
                          <Check className="h-3 w-3 text-[#0e62fe]" />
                        </div>
                        <span className={`text-sm ${
                          theme === 'dark' ? 'text-zinc-300' : 'text-zinc-700'
                        }`}>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                  {featureIndex < features.length - 1 && <Separator className={`my-6 ${
                    theme === 'dark' ? 'bg-zinc-700' : 'bg-zinc-300'
                  }`} />}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </Card>
    </motion.section>
  );
}